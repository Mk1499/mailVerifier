const express = require('express')
const app = express()
const port = 3005
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require('./routes/user');

app.use(bodyParser.json());
app.use(cors());

require("dotenv").config();
mongoose.connect(process.env.DBConnect);
mongoose.connection.once("open", () => {
    console.log("connected to Database");
  });

  app.use("/", userRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})