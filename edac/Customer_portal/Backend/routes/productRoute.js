const express = require("express");
const router = express.Router();
const db = require('../db')


router.post("/getallproductsbyid", (req, res) => {


    const { productId } = req.body
    // console.log(pid)

    if (productId == "101") {
        const query = `select * from mobile where mobile.productId="${productId}"`
        db.query(query, (err, docs) => {
            if (!err) {
                return res.send(docs);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        })
    }
    else if (productId == "102") {

        const query2 = `select * from earphone where earphone.productId="${productId}"`

        db.query(query2, (err, docs) => {

            if (!err) {

                return res.send(docs);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }

        })

    }
    else if (productId == "103") {

        const query3 = `select * from laptop where laptop.productId="${productId}"`

        db.query(query3, (err, docs) => {

            if (!err) {

                return res.send(docs);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }
        })
    }
    else {

        const query4 = `select * from tv where tv.productId="${productId}"`

        db.query(query4, (err, docs) => {

            if (!err) {

                return res.send(docs);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }

        })
    }


})




router.post("/getproductbyid", (req, res) => {

    const { productId, itemId } = req.body

    console.log(req.body)



    if (productId == "101") {

        const query = `select * from mobile where mobileId="${itemId}"`

        db.query(query, (err, docs) => {

            if (!err) {

                return res.send(docs[0]);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }



        })

    }
    else if (productId == "102") {

        const query2 = `select * from earphone where earphoneId="${itemId}"`

        db.query(query2, (err, docs) => {

            if (!err) {

                return res.send(docs[0]);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }



        })

    }
    else if (productId == "103") {

        const query3 = `select * from laptop where laptopId="${itemId}"`

        db.query(query3, (err, docs) => {

            if (!err) {

                return res.send(docs[0]);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }



        })

    }
    else {

        const query4 = `select * from tv where tvId="${itemId}"`

        db.query(query4, (err, docs) => {

            if (!err) {
                return res.send(docs[0]);
            }
            else {
                return res.status(400).json({ message: 'Something went wrong' });
            }



        })
    }



})

router.get("/getlatestmobiles", (req, res) => {


    const query = `select * from mobile  ORDER BY mobileId DESC limit 6;`

    db.query(query, (err, docs) => {

        if (err) {

            console.log("something went wrong")
            
        } else {
            res.send(docs)
        }
    })
})

router.get("/getlatestearphones", (req, res) => {

    const query = `select * from earphone ORDER BY earphoneId DESC limit 6;`

    db.query(query, (err, docs) => {

        if (err) {
            console.log("something went wrong")
        } else {
            res.send(docs)
        }
    })
})






module.exports = router