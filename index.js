const express = require('express');
const dotenv = require('dotenv');
const router = require('./Router/Product.router');
const app = express()
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 9000;

// middleware
app.use(cors())
app.use(express.json())

const connectMongoose = mongoose.connect('mongodb://localhost:27017/myapp',).then(() => console.log("connect success")).catch((err) => console.log("mongoose not connected"));

app.use('/product', router)

app.get('/', (req, res) => {
  res.send("wow server is running")
})

app.listen(port, () => {
  console.log(`server is running ${port}`)
})
