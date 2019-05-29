const mongoose = require('mongoose');
const db = require('./index');

// Product Description Schema
const productDescriptionSchema = new mongoose.Schema({
  productName: String,
  designer: String,
  price: Number,
  stars: Number,
  reviews: Number,
  description: String,
  fit: String,
  sizes: Array,
  colors: Array,
  imageUrlsColor1: Array,
  imageUrlsColor2: Array
});

// Connecting the Product Descriptions Schema to the database
const ProductDescription = mongoose.model('ProductDescriptions', productDescriptionSchema);

module.exports = ProductDescription;