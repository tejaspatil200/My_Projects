const express = require('express')
const bodyParser = require("body-parser");
const app = express()



var dbconnection = require('./db')
var productsroute = require('./routes/productsRoute')

var userRoute=require('./routes/userRoute')

var orderRoute = require('./routes/orderRoute')



app.use(bodyParser.json());

app.use('/api/products/',productsroute)
app.use('/api/orders/',orderRoute)

app.use("/api/users/",userRoute)

app.get("/",(req,res)=>{

    res.send("this is backend")
})


const port =8000;
app.listen(port,()=> console.log("Node js server started"));