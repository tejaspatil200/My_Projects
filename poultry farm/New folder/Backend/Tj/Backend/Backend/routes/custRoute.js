const express = require("express")
const router = express.Router();
const db = require('../db')
const utils = require('../util')

router.post("/orders", (req, res) => {

    const { Name, Type, Quantity, Address, Phone } = req.body
    console.log("In order");
  
    console.log(Type)
    console.log(req.body)
     
    const query = `insert into orders(customerName,type,quantity,address,phone) 
    values ('${Name}', '${Type}', '${Quantity}','${Address}','${Phone}')`
          
 
    if (Type == "Chicken") {

        const b = Number(Quantity)
        console.log(b)

        const query2 = `select bird_quantity,bsale_quantity from bird_record`

        db.query(query2, (err1, docs) => {
            if (!err1) {
                console.log(docs)
                var num1 = (docs[0].bird_quantity) - (b)
                var num3 = 1

                console.log(num1)
                //  console.log(num2)
                const query3 = `UPDATE bird_record SET bird_quantity="${num1}" where bird_no="${num3}"`

                db.query(query3, (err, docs) => {
                    if (!err) {

                        console.log("birds updated sucessfull")
                        // return res.send(utils.createResult(err1,docs)).status(200)

                    }
                })
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        })

    }
    else {

        const query2 = `select eggs_quantity  from eggs_record`
       
        db.query(query2, (err1, docs) => {
            if (!err1) {
                console.log(docs)
                var num1 = (docs[0].eggs_quantity) - Number(Quantity)
                var num3 = 1
                console.log(num1)

                const query3 = `UPDATE eggs_record SET eggs_quantity="${num1}" where eggs_no="${num3}"`

                db.query(query3, (err, docs) => {
                    if (!err) {

                        console.log("eggs updated sucessfully")
                        // return res.send(utils.createResult(err1,docs)).status(200)

                    }
                })

            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        })

    }
    
    db.query(query, (error, docs) => {

        if (!error) {
        
            return res.send(utils.createResult(error, docs)).status(200)
        }
        else {
            res.status(400).json({ message: 'Invaid Insert' });
        }
    })
  
})




router.get("/getorders", (req, res) => {

            
    const query = `SELECT * FROM orders`
          
         db.query(query, (error, docs) => {

        if (!error) {
        
            return res.send(utils.createResult(error, docs)).status(200)
        }
        else {
            res.status(400).json({ message: 'Invaid Record' });
        }
    })
  
})
module.exports = router