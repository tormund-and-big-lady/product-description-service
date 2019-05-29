const router = require('express').Router();
const controller = require('./controller');

// Fetch all data
router.route('/findAll')
  .get(controller.findAll);

// Fetch one dress randomly
router.route('/findOneRandom')
  .get(controller.findOneRandom);

// Fetch 5 dresses for Recommendation Bar
router.route('/recommendation')
  .get(controller.recommendation);

// Fetch one dress by _id
router.route('/findOneById/:_id')
  .get(controller.findOneById);

module.exports = router;