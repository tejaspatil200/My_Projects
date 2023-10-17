const mongoose = require("mongoose");

var mongoDBURl="mongodb+srv://tejas:tejas@cluster0.bhcxn.mongodb.net/mern-ecommerce";

mongoose.connect(mongoDBURl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var dbconnect = mongoose.connection;
dbconnect.on("error", () => {
  console.log("Mongo Db connection failed");
});

dbconnect.on("connected", () => {
  console.log("Nongo Db connection Successfull");
});

module.exports = mongoose;
