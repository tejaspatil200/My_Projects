
const { v4: uuidv4 } = require("uuid")

const express = require("express")

const router = express.Router();
const stripe = require("stripe")("sk_test_51JMFkkSHobfatWODLcEiJksgPId3w323Fk1waqDh6PPaXxoDuEPQ0iw4yBAhHhgqmplQtuAtc65S4999igsDaHBK00DlGoaP8d")
const Order = require('../models/orderModel')


router.post("/placeorder", async (req, res) => {

    const { token, cartItems, currentUser, subtotal } = req.body

    const customer = await stripe.customers.create({


        email: token.email,
        source: token.id

    })

    const payment = await stripe.charges.create({

        amount: subtotal*100,
        currency: "inr",

        customer: customer.id,
        receipt_email: token.email

    }, {


        idempotencyKey: uuidv4()   //unique for every transaction payment
    })

    if(payment){

       // res.send("payment Sucessfull")


        const order = new Order ({

            userid :currentUser._id,
            name :currentUser.name,
            email :currentUser.email,
            orderItems :cartItems,

            shippingAddress : {

                address :token.card.address_line1,
                city :token.card.address_city,
                country :token.card.address_country,
                postalCode :token.card.address_zip,
                
            },

            orderAmount : subtotal,
            transactionId :payment.source.id,
            isDelivered :false
        })
        order.save(err=>{

            if(err){
                return res.status(400).json({message: 'something went wrong'});
            }
            else{
                res.send("order placed succesfully");
            }
        })

    }else{

        return res.status(400).json({message: 'Payment failed'});
    }






});



router.post("/getordersbyuserid",(req,res)=>{


    const userid=req.body.userid

    Order.find({userid:userid},(err,docs)=>{



        if(err){

            return res.status(400).json({message: 'Something went wrong'});
        }
        else{

            res.send(docs)
        }
    })



})






router.post("/getorderbyid",(req,res)=>{


    const orderid=req.body.orderid

    Order.find({_id:orderid},(err,docs)=>{



        if(err){

            return res.status(400).json({message: 'Something went wrong'});
        }
        else{

            res.send(docs[0])
        }
    })



})
module.exports=router