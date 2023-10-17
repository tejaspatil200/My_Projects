const express = require("express")
const router = express.Router();
const db = require('../db')
const utils = require('../util')

router.get("/getbirds", (req, res) => {


    const query1 = `select bird_quantity,bsale_quantity,(bird_quantity-bsale_quantity) as available_qty  from bird_record`

    db.query(query1, (err1, result1) => {
        if (!err1) {

            return res.send(utils.createResult(err1, result1[0])).status(200);
        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})


router.post("/insertbirds", (req, res) => {


    const { bird_qty } = req.body
    console.log(req.body)

    const query1 = `select bird_quantity,bsale_quantity from bird_record`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].bird_quantity) + Number(bird_qty)
            // var num2 = (docs[0].bsale_quantity) + bsale_qty
            var num3 = 1


            console.log(num1)
            //  console.log(num2)

            const query2 = `UPDATE bird_record SET bird_quantity="${num1}" where bird_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    return res.send("birds updated sucessfully").status(200);
                    // return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})



router.post("/insertsalebirds", (req, res) => {


    const { bsale_qty } = req.body
    console.log(req.body)

    const query1 = `select bird_quantity,bsale_quantity from bird_record`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].bsale_quantity) + Number(bsale_qty)
            var num3 = 1
            console.log(num1)


            const query2 = `UPDATE bird_record SET bsale_quantity="${num1}" where bird_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    return res.send("sale birds updated sucessfully").status(200);
                    // return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})



router.post("/editbirds", (req, res) => {

    const { bird_qty } = req.body
    console.log(req.body)

    const query2 = `UPDATE bird_record SET bird_quantity="${bird_qty}" where bird_no="1"`
    db.query(query2, (err, docs) => {
        if (!err) {

            return res.send("birds Edited sucessfully").status(200);
            // return res.send(utils.createResult(err1,docs)).status(200)

        }
    })

})

router.post("/addorder", (req, res) => {

    const { bird_qty } = req.body
    console.log(req.body)

    const query2 = `UPDATE bird_record SET bird_quantity="${bird_qty}" where bird_no="1"`
    db.query(query2, (err, docs) => {
        if (!err) {

            return res.send("birds Edited sucessfully").status(200);
            // return res.send(utils.createResult(err1,docs)).status(200)

        }
    })

})

router.post("/editsalebirds", (req, res) => {

    const { bsale_qty } = req.body
    console.log(req.body)

    const query2 = `UPDATE bird_record SET bsale_quantity="${bsale_qty}" where bird_no="1"`
    db.query(query2, (err, docs) => {
        if (!err) {

            return res.send("Sales birds Edited sucessfully").status(200);
            // return res.send(utils.createResult(err1,docs)).status(200)

        }
    })

})


router.post("/insertbirds", (req, res) => {


    const { bird_qty } = req.body
    const b= Number(bird_qty)
    console.log(b)
  

    const query1 = `select bird_quantity,bsale_quantity from bird_record`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].bird_quantity) + (b)
            // var num2 = (docs[0].bsale_quantity) + bsale_qty
            var num3 = 1


            console.log(num1)
            //  console.log(num2)

            const query2 = `UPDATE bird_record SET bird_quantity="${num1}" where bird_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    return res.send("birds updated sucessfully").status(200);
                    // return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})

router.post("/insertfeeds", (req, res) => {


    const { feed_qty } = req.body
    console.log(req.body)

    const query1 = `select quantity from feed_record where feed_no=1`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].quantity) + Number(feed_qty)
            var num3 = 1


            console.log(num1)


            const query2 = `UPDATE feed_record SET quantity="${num1}" where feed_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    // return res.send("Daily feed updated sucessfully").status(200);
                    return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})


router.post("/insertdailyfeeds", (req, res) => {


    const { feed_qty } = req.body
    console.log(req.body)

    const query1 = `select quantity from feed_record where feed_no=1`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].quantity) - feed_qty
            var num3 = 1


            console.log(num1)


            const query2 = `UPDATE feed_record SET quantity="${num1}" where feed_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    // return res.send("Daily feed updated sucessfully").status(200);
                    return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})




router.get("/getfeeds", (req, res) => {


    const query1 = `select feed,quantity from feed_record`

    db.query(query1, (err1, result1) => {
        if (!err1) {
            console.log(result1[0])

            res.send(utils.createResult(err1, result1[0])).status(200)
        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})

router.get("/getOrders", (req, res) => {


    const query1 = `select name,order_id,order_date,order_type from orders`

    db.query(query1, (err1, result1) => {
        if (!err1) {
            console.log(result1[0])

            res.send(utils.createResult(err1, result1)).status(200)
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


            res.send(utils.createResult(err1, result1[0])).status(200)
        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})








router.post("/inserteggs", (req, res) => {


    const { eggs_qty } = req.body
    console.log(req.body)
    const query1 = `select eggs_quantity  from eggs_record`
 //   const query1 = `select bird_quantity,bsale_quantity from bird_record`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].eggs_quantity) + Number(eggs_qty)
            var num3 = 1
            console.log(num1)
           

            const query2 = `UPDATE eggs_record SET eggs_quantity="${num1}" where eggs_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    return res.send("eggs updated sucessfully").status(200);
                    // return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})




router.post("/insertsaleeggs", (req, res) => {


    const { eggs_qty } = req.body
    console.log(req.body)
    const query1 = `select eggs_quantity  from eggs_record`
 //   const query1 = `select bird_quantity,bsale_quantity from bird_record`

    db.query(query1, (err1, docs) => {
        if (!err1) {
            console.log(docs)
            var num1 = (docs[0].eggs_quantity) - eggs_qty
            var num3 = 1
            console.log(num1)
           

            const query2 = `UPDATE eggs_record SET eggs_quantity="${num1}" where eggs_no="${num3}"`


            db.query(query2, (err, docs) => {
                if (!err) {

                    return res.send("eggs  updated sucessfully").status(200);
                    // return res.send(utils.createResult(err1,docs)).status(200)

                }
            })


        }
        else {
            return res.status(400).json({ message: 'Something went wrong' });
        }
    })


})



router.post("/editeggs", (req, res) => {

    const { eggs_qty } = req.body
    console.log(req.body)

    const query2 = `UPDATE eggs_record SET eggs_quantity="${eggs_qty}" where eggs_no="1"`
    db.query(query2, (err, docs) => {
        if (!err) {

            // return res.send("eggs Edited sucessfully").status(200);
            return res.send(utils.createResult(err,docs)).status(200)

        }
    })

})

module.exports = router