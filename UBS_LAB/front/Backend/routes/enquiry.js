const express = require("express")
const router = express.Router();
const db = require('../db')
const cryptoJs = require('crypto-js')


router.post("/enquiry", (req, res) => {

    
    const{Name,Email,Phone,Product_Name,CAS_No,Message}=req.body
    console.log(req.body)

    const query = `insert into enquiry(Name,Email,Phone,Product_Name,CAS_No,Message) 
    values ('${Name}', '${Email}', '${Phone}','${Product_Name}','${CAS_No}','${Message}')`
   

    const query2 = `select * from enquiry where Email="${Email}"`

    db.query(query2, (error, docs) => {

        if (docs.length > 0) {

            res.status(400).json({ message: 'Email Already Exist' });
        }
        else {
          
            // console.log(req.body)


            db.query(query, (err, result) => {

                if (result) {

                    res.send("Enquiry sucessfully Registred")
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



module.exports = router