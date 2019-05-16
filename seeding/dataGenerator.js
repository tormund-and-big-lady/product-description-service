const ProductDescription = require('../database/models');
const dressData = require('./dressData.json');

let designers = ['SOMETHING NAVY', 'ELIZA J', 'LEITH', 'FREE PEOPLE', 'BP.', 'CHELSEA28', 'HARPER ROSE', 'CHARLES HENRY', 'RACHEL PARCELL', 'GIBSON', 'WAYF']
let inStoreBooleans = [true, false];
let fits = ["Runs large; order one size down.", "True to size.", "Runs small; order one size up."];
const seeder = () => {
  let dressDataRandomInt = Math.floor(Math.random() * dressData.length);
  
  let productName = dressData[dressDataRandomInt].productName;
  let designer = designers[Math.floor(Math.random() * 11)];
  let price = Math.floor(Math.random() * (300 - 100)) + 100;
  let stars = Math.floor(Math.random() * (5 - 1)) + 1;
  let reviews = Math.floor(Math.random() * (20 - 10)) + 10;
  let description = dressData[dressDataRandomInt].description;
  let fit = fits[Math.floor(Math.random() * 3)];
  let sizes = ['XX-Small', 'X-Small', 'Small', 'Medium', 'Large'];
  let colors = dressData[dressDataRandomInt].colors;
  let imageUrlsColor1 = dressData[dressDataRandomInt].imageUrlsColor1;
  let imageUrlsColor2 = dressData[dressDataRandomInt].imageUrlsColor2;
  let inStore = inStoreBooleans[Math.floor(Math.random() * 2)];
  
  ProductDescription.create({ productName, designer, price, stars, reviews, description, fit, sizes, colors, imageUrlsColor1, imageUrlsColor2, inStore})
    .then(() => console.log('seeded'))
    .catch((err) => console.log(err));
}

for(let i = 0; i < 100; i++) {
  seeder();
}