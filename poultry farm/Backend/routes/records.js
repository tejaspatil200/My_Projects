const express = require("express")
const router = express.Router();
const db = require('../db')

router.get("/getbirds", (req, res) => {


    const query1 = `select bird_quantity,bsale_quantity,(bird_quantity-bsale_quantity) as available_qty  from bird_record`

    db.query(query1, (err1, result1) => {
        if (!err1) {

            return res.send(result1[0]);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})


router.post("/insertbirds", (req, res) => {


    const { bird_qty, bsale_qty } = req.body
    console.log(req.body)

    const query1 = `select bird_quantity,bsale_quantity from bird_record`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].bird_quantity) + bird_qty
            var num2 = (docs[0].bsale_quantity) + bsale_qty
            var num3 = 1


            console.log(num1)
            console.log(num2)

            const query2 = `UPDATE bird_record SET bird_quantity="${num1}", bsale_quantity="${num2}" where bird_no="${num3}"`

            
            db.query(query2, (err,docs) => {
                if (!err) {

                    return res.send("birds updated sucessfully").status(200);

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})


router.get("/geteggs", (req, res) => {


    const query1 = `select eggs_quantity from eggs_record`

    db.query(query1, (err1, result1) => {
        if (!err1) {

            return res.send(result1[0]);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})


router.get("/getfeeds", (req, res) => {


    const query1 = `select quantity from feed_record`

    db.query(query1, (err1, result1) => {
        if (!err1) {

            return res.send(result1[0]);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})




module.exports = router