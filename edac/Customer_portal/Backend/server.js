const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors("*"));
app.use(bodyParser.json());

var userRoute = require("./routes/userRoute");
var productsRoute = require("./routes/productRoute");
var uploadTestRoute = require("./routes/uploadTestRoute");
var orderRoute = require("./routes/orderRoute");

app.use("/api/users/", userRoute);
app.use("/api/products/", productsRoute);

app.use("/api/", uploadTestRoute);

app.use("/api/orders/", orderRoute);

app.get("/", (req, res) => {
  res.send("This is my backend");
});

// static routing
// any file in uploads directory does not require any route
// express will simply return any file from uploads directory
app.use(express.static("uploads"));

app.listen(4000, "0.0.0.0", () => {
  console.log("server started on port 4000");
});

// const port =8000;
// app.listen(port,()=> console.log("Node js server started"));
