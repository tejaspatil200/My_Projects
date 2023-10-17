const express = require("express")
const router = express.Router();
const db = require('../db')
const cryptoJs = require('crypto-js')


router.post("/register", (req, res) => {

    const { customerName,customerEmail,customerPassword, customerAge, customerMobile, customerGender,customerDob} = req.body

    const query = `insert into customer(customerName,customerEmail,customerPassword,customerAge,customerMobile,customerGender,customerDob) 
    values ('${customerName}', '${customerEmail}', '${customerPassword}','${customerAge}','${customerMobile}','${customerGender}','${customerDob}')`
   

    const query2 = `select * from customer where customerEmail="${customerEmail}"`

    db.query(query2, (error, docs) => {

        if (docs.length > 0) {

            res.status(400).json({ message: 'email aready exist' });
        }
        else {
            // console.log(customerDob)
            // console.log(req.body)


            db.query(query, (err, result) => {

                if (result) {

                    res.send("user Registration sucessfull")
                }
                else {
                    res.send("something went wrong")
                }

            })
          

        }
        if (error) {
            res.status(400).json({ message: 'Error in something' });
        }

    })

})


router.post('/login', (req, res) => {
   

    const { customerEmail, customerPassword } = req.body
    
    

    const query = `select * from customer where customerEmail="${customerEmail}" and customerPassword="${customerPassword}"`


    db.query(query, (err, docs) => {


        if (docs.length > 0) {

            const customer = {
                customerId: docs[0].customerId,
                customerName: docs[0].customerName,
                customerAge: docs[0].customerAge,
                customerEmail: docs[0].customerEmail,                
                customerGender: docs[0].customerGender,
                customerMobile: docs[0].customerMobile,
                customerDob:docs[0].customerDob,
              
            }

            res.send(customer)

        }
        else {
            res.status(400).json({ message: 'Invaid login' });

        }
    })
})




router.post("/update", (req, res) => {

  
    const { customerId, updatedcustomer } = req.body

    


    const query = `UPDATE customer SET customerName="${updatedcustomer.customerName}",
    customerEmail="${updatedcustomer.customerEmail}",customerPassword="${updatedcustomer.customerPassword}",
    customerMobile="${updatedcustomer.customerMobile}",customerDob="${updatedcustomer.customerDob}",customerAge="${updatedcustomer.customerAge}" where (customerId="${customerId}") `

    db.query(query,(err,docs)=>{


        if (err) {

            return res.status(400).json({ message: 'something went wrong' +err});

        }
        else {

            res.send("Customer details updated successfully")
        }


    })


})





module.exports = router