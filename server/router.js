const router = require('express').Router();
const controller = require('./controller');

// Fetch all data
router.route('/productDescription/findAll')
  .get(controller.findAll);

// Fetch one dress randomly
router.route('/productDescription/findOneRandom')
  .get(controller.findOneRandom);

// Fetch 5 dresses for Recommendation Bar
router.route('/productDescription/recommendation')
  .get(controller.recommendation);

// Fetch one dress by _id
router.route('/productDescription/findOneById/:_id')
  .get(controller.findOneById);

module.exports = router;