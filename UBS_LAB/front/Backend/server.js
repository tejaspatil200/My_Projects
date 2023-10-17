const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors('*'))
app.use(bodyParser.json())




var enquiryRoute=require('./routes/enquiry')


app.use("/api/",enquiryRoute)


app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
  })


// const port =3000;
// app.listen(port,()=> console.log("Node js server started"));