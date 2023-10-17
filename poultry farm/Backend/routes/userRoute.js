const express = require("express")
const router = express.Router();
const db = require('../db')

router.post('/adminlogin', (req, res) => {
   
 const { userName, password } = req.body
      
 const query = `select * from admin where userName="${userName}" and password="${password}"`

   db.query(query, (err, docs) => {

        if (docs.length > 0) {

         res.send("Admin Login sucessfull").status(200)

        }
        else {
            res.status(400).json({ message: 'Invaid login' });

        }
    })
})

module.exports = router