const express = require("express")
const router = express.Router();
const db = require('../db')
const utils = require('../util')

router.post('/adminlogin', (req, res) => {
   
 const { userName, password } = req.body
      console.log("I am here");
      
 const query = `select * from admin where userName="${userName}" and password="${password}"`

   db.query(query, (err, docs) => {

        if (docs.length > 0) {

        //  res.send("Admin Login sucessfull").status(200)
         return res.send(utils.createResult(err,docs)).status(200)

        }
        else {
            res.status(400).json({ message: 'Invaid login' });
            // return res.send(utils.createResult(err,docs)).status(200)

        }
    })
})

module.exports = router