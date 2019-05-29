const ProductDescription = require('../database/models');

module.exports = {
  findAll: (req, res) => {
    ProductDescription.find({}) 
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
  },
  findOneRandom: (req, res) => {
    ProductDescription.aggregate([{ $sample: { size: 1 } }])
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
  },
  recommendation: (req, res) => {
    ProductDescription.aggregate([{ $sample: { size: 4 } }])
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send('Error'));
  },
  findOneById: (req, res) => {
    const { _id } = req.params;
    ProductDescription.find({ _id })
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send('Error'));
  }
}