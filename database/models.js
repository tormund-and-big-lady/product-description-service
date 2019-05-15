const mongoose = require('mongoose');
const db = require('./index');

// Product Description Schema
const productDescriptionSchema = new mongoose.Schema({
  productName: String,
  designer: String,
  stars: Number,
  fitDescription: String,
  sizes: Array,
  color: Array,
  inStore: Boolean
});

// Connecting the Product Descriptions Schema to the database
const ProductDescription = mongoose.model('ProductDescriptions', productDescriptionSchema);

module.exports = ProductDescription;