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
app.get('/api/productDescription', (req, res) => {
  ProductDescription.find({})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('Error'));
})

app.post('/api/productDescription', (req, res) => {
  const { productName, designer, stars, fitDescription, sizes, color, inStore } = req.body;
  ProductDescription.create({ productName, designer, stars, fitDescription, sizes, color, inStore })
    .then(() => res.status(201).send('Product Description Created'))
    .catch(err => res.status(404).send('Error'));
})

// Need to include a get one randomly route

// Verifies and sets port on where server is listens at
app.listen(port, () => console.log(`Example app listening on port ${port}!`));