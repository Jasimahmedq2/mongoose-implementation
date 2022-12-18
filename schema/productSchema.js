const express = require('express');
const mongoose = require('mongoose');

exports.ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
})