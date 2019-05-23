const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const ProductDescription = require('../database/models');

// Creating server and port number
const app = express();
const port = 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serves static HTML file
app.use(express.static(path.join(__dirname, '../client/dist')));

// Request Handlers

// Fetch all data 
app.get('/api/productDescriptions', (req, res) => {
  ProductDescription.find({}) 
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('Error'));
})

// Fetch random one description
app.get('/api/productDescription', (req, res) => {
  ProductDescription.aggregate([{ $sample: { size: 1 } }])
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('Error'));
})

// Verifies and sets port on where server is listens at
app.listen(port, () => console.log(`Example app listening on port ${port}!`));