const { v4: uuidv4 } = require("uuid")
const express = require("express")
const router = express.Router();
const db = require('../db')
const stripe = require("stripe")("sk_test_51JMFkkSHobfatWODLcEiJksgPId3w323Fk1waqDh6PPaXxoDuEPQ0iw4yBAhHhgqmplQtuAtc65S4999igsDaHBK00DlGoaP8d")

router.post("/placeorder", async (req, res) => {
    const { token, itemDetails, currentUser, subtotal } = req.body
    console.log(token)
    console.log(itemDetails)
    console.log(currentUser)
    console.log(subtotal)

    if (!token.customerAddress) {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        })
        const payment = await stripe.charges.create({
            amount: subtotal * 100,
            currency: "inr",
            customer: customer.id,
            receipt_email: token.email
        }, {

            idempotencyKey: uuidv4()   //unique for every transaction payment
        })

        //  console.log(payment)

        //  console.log(payment.source.id)

        if (payment) {

            const query1 = (`INSERT INTO itemDetail(itemName,price,quantity,orderId) VALUES ? `)

            const query2 = `insert into orders(customerId, orderAmount,transactionId, paymentStatus, deliveryStatus) 
        values ((select customerId from customer where customerId=${currentUser.customerId}), '${subtotal}', '${payment.source.id}','Done', 'False')`


            const query3 = (`UPDATE customer SET customerAddress="${token.card.address_line1}",customerCity="${token.card.address_city}",customerPincode="${token.card.address_zip}",
        customerCountry="${token.card.address_country}" where customerId="${currentUser.customerId}"`)


            db.query(query2, (err, docs) => {
                if (err) {
                    return res.status(400).json({ message: 'something went wrong' });
                }
                else {

                    const itemValues = itemDetails.map(item => [item.itemName, item.price, item.quantity, docs.insertId]);

                    console.log(itemValues);
                    console.log(docs.insertId)

                    db.query(query3, (err) => {
                        if (err) {
                            console.log("something went wrong while adding Address");
                        } else {
                            console.log("Address Added succesfully");


                            db.query(query1, [itemValues], (err) => {
                                if (err) {
                                    console.log("something went wrong while adding cart items");
                                }
                                else {
                                    console.log("Items Added succesfully");
        
                                
        
                                }
                            })

                        }
                    })

                  
                    res.send("order placed succesfully");
                }
            })
        } else {
            return res.status(400).json({ message: 'Payment failed' });
        }


    } else {
        console.log("Hello Tejas")


        const query1 = (`INSERT INTO itemDetail(itemName,price,quantity,orderId) VALUES ?`)

        const query2 = `insert into orders(customerId, orderAmount,transactionId, paymentStatus, deliveryStatus) 
        values ((select customerId from customer where customerId=${currentUser.customerId}), '${subtotal}', 'CASH','Unpaid', 'False')`

        const query3 = (`UPDATE customer SET customerAddress="${token.customerAddress}",customerCity="${token.customerCity}",customerPincode="${token.customerPincode}",
        customerCountry="${token.customerCountry}" where customerId="${currentUser.customerId}"`)


        db.query(query2, (err, docs) => {


            if (err) {
                return res.status(400).json({ message: 'something went wrong' });
            }
            else {

                const itemValues = itemDetails.map(item => [item.itemName, item.price, item.quantity, docs.insertId]);

                console.log(itemValues);
                console.log(docs.insertId)


                db.query(query3, (err) => {
                    if (err) {
                        console.log("something went wrong while adding Address");
                    } else {
                        console.log("Address Added succesfully");


                        db.query(query1, [itemValues], (err) => {
                            if (err) {
                                console.log("something went wrong while adding cart items");
                            }
                            else {
                                console.log("Items Added succesfully");
    
                            
    
                            }
                        })

                    }
                })
                res.send("order placed succesfully");
            }

        })

    }

});


router.post("/getordersbycustomerid", (req, res) => {


    const customerId = req.body.customerId

    const query = `select * from orders where customerId = ${customerId} `

    db.query(query, (err, docs) => {

        if (err) {
            console.log("something went wrong");
        }
        else {
            res.send(docs)
        }

    })


})



router.post("/getorderbyid", (req, res) => {


    const orderId = req.body.orderId

    const query = `select * from itemdetail where orderId = ${orderId} `

    db.query(query, (err, docs) => {

        if (err) {
            console.log("something went wrong");
        }
        else {
            res.send(docs)
        }

    })
})



module.exports = router