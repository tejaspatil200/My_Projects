const mongoose = require("mongoose");
const express = require("express")

const router = express.Router();

const User = require('../models/userModel')


router.post("/register", (req, res) => {

    User.find({ email: req.body.email }, (err, docs) => {

        if (docs.length > 0) {

            res.status(400).json({ message: 'email aready exist' });
        }
        else {


            const newuser = new User({

                name: req.body.name,
                email: req.body.email,
                password: req.body.password

            })

            newuser.save(err => {

                if (!err) {

                    res.send("user Registration sucessfull")
                }
                else {
                    res.send("something went wrong")
                }
            })



        }
        if (err) {

            res.status(400).json({ message: 'Something went wrong' });
        }

    })



})



router.post("/login", (req, res) => {

    User.find({ email: req.body.email, password: req.body.password }, (err, docs) => {


        if (docs.length > 0) {


            const user = {
                name: docs[0].name,
                _id: docs[0]._id,
                email: docs[0].email
            }

            res.send(user)

        }
        else {
            res.status(400).json({ message: 'Invaid login' });

        }
    })
})



router.post("/update", (req, res) => {


    const { userid, updateduser } = req.body

    User.findByIdAndUpdate(userid , {

        name: updateduser.name,
        email: updateduser.email,
        password: updateduser.password
    }, (err) => {


        if (err) {

            return res.status(400).json({ message: 'something went wrong' +err});

        }
        else {

            res.send("user details updated successfully")
        }


    })
})




module.exports = router