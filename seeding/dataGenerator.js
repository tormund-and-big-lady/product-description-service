const mongoose = require('mongoose');
const ProductDescription = require('../database/models');
const dressData = require('./dressData.json');

// Random Data Arrays
const designers = ['Something Navy', 'Eliza J', 'Leith', 'Free People', 'BP.', 'Chelsea28', 'Harper Rose', 'Charles Henry', 'Rachel Parcell', 'Gibson', 'WAYF']
const fits = ["Runs large; order one size down.", "True to size.", "Runs small; order one size up."];

// Seed Data function that randomizes a single data object
const seedData = () => {
  // Gets a random index from the Dress Data json array
  const dressDataRandomInt = Math.floor(Math.random() * dressData.length);
  
  // Grabs the data object from the json array
  const productName = dressData[dressDataRandomInt].productName;
  const description = dressData[dressDataRandomInt].description;
  const colors = dressData[dressDataRandomInt].colors;
  const imageUrlsColor1 = dressData[dressDataRandomInt].imageUrlsColor1;
  const imageUrlsColor2 = dressData[dressDataRandomInt].imageUrlsColor2;
  // Grabs the data from the Random Data Array
  const designer = designers[Math.floor(Math.random() * 11)];
  const fit = fits[Math.floor(Math.random() * 3)];
  // Randomizes a number 
  const price = Math.floor(Math.random() * (300 - 100)) + 100;
  const stars = Math.floor(Math.random() * (5 - 1)) + 1;
  const reviews = Math.floor(Math.random() * (20 - 10)) + 10;
  // Static size Array
  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large'];
  
  return { productName, designer, price, stars, reviews, description, fit, sizes, colors, imageUrlsColor1, imageUrlsColor2 }
}

// Fills main data array with x number of documents
const documentsTotal = 100
const mainDataArray = [];
for (let i = 0; i < documentsTotal; i++) {
  mainDataArray.push(seedData());
}

// Seeder function creating documents in the DBMS
const seeder = () => {
  ProductDescription.create(mainDataArray)
    .then(() => console.log('seeded'))
    .then(() => mongoose.connection.close())
    .catch((err) => console.log(err));
}

// Runs seeder function
seeder();
