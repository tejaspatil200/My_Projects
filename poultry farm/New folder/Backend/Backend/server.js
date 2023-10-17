const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(cors('*'))
app.use(bodyParser.json())





 var userRoute=require('./routes/userRoute')
 var dashBoard=require('./routes/dashBoard')
 var records=require('./routes/records')

 app.use("/userRoute",userRoute)
 app.use("/dashboard",dashBoard)
 app.use("/records",records)




app.listen(4000, '0.0.0.0', () => {
    console.log('server started on port 4000')
  })
