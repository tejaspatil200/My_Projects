const express = require("express");
const router = express.Router();
const db = require('../db')
const utils = require('../util')


router.get("/getrecord", (req, res) => {

  
        const query1 = `select bird_quantity,bsale_quantity,(bird_quantity-bsale_quantity) as available_qty  from bird_record`
        const query2 = `select eggs_quantity  from eggs_record`
        const query3 = `select quantity  from feed_record`
   
        db.query(query2,(err2,result2)=>{
            db.query(query3,(err3,result3)=>{
                db.query(query1, (err1, result1) => {
                    if (!err1) {
                        console.log(result1[0])
                        console.log(result2)
                        console.log(result3)
                        

                        var result = {

                            available_birds:result1[0].available_qty,
                            birds_sale:result1[0].bsale_quantity,
                            available_eggs: result2[0].eggs_quantity,
                            available_feeds: result3[0].quantity
                           
            
                        }
                        console.log(result)
                       

                        return res.send(utils.createResult(err1,result)).status(200);
                    }
                    else {
                        return res.status(400).json({ message: 'Something went wrong' });
                    }
                })


            })
        })
   
})



module.exports = router