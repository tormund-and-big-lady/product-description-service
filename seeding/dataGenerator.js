const ProductDescription = require('../database/models');
const dressData = require('./dressData.json');

const designers = ['Something Navy', 'Eliza J', 'Leith', 'Free People', 'BP.', 'Chelsea28', 'Harper Rose', 'Charles Henry', 'Rachel Parcell', 'Gibson', 'WAYF']
const fits = ["Runs large; order one size down.", "True to size.", "Runs small; order one size up."];
const seeder = () => {
  const dressDataRandomInt = Math.floor(Math.random() * dressData.length);
  
  const productName = dressData[dressDataRandomInt].productName;
  const designer = designers[Math.floor(Math.random() * 11)];
  const price = Math.floor(Math.random() * (300 - 100)) + 100;
  const stars = Math.floor(Math.random() * (5 - 1)) + 1;
  const reviews = Math.floor(Math.random() * (20 - 10)) + 10;
  const description = dressData[dressDataRandomInt].description;
  const fit = fits[Math.floor(Math.random() * 3)];
  const sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large'];
  const colors = dressData[dressDataRandomInt].colors;
  const imageUrlsColor1 = dressData[dressDataRandomInt].imageUrlsColor1;
  const imageUrlsColor2 = dressData[dressDataRandomInt].imageUrlsColor2;
  
  ProductDescription.create({ productName, designer, price, stars, reviews, description, fit, sizes, colors, imageUrlsColor1, imageUrlsColor2 })
    .then(() => console.log('seeded'))
    .catch((err) => console.log(err));
}

for(let i = 0; i < 100; i++) {
  seeder();
}