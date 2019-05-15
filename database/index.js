const mongoose = require('mongoose');

// Connecting our local storage db to our application with the db name productDescription
const db = mongoose.connect('mongodb://localhost/productDescription', {useNewUrlParser: true});

module.exports = db;