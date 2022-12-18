const express = require('express');
const mongoose = require('mongoose');
const router = express.Router()
const ProductSchema = require('../schema/productSchema')
const ProductModel = new mongoose.model('product', ProductSchema)
console.log(ProductModel, "product model")

router.post('/', async(req, res) => {
  try {
    const newProduct = new ProductModel(req.body)
     await newProduct.save()
    res.status(200).send({message: "successfully get data"})
  } catch (error) {
    res.status(500).send(error.message)
  }
})

module.exports = router;