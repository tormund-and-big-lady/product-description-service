const mongoose = require('mongoose');

// Connecting our local storage db to our application with the db name productDescription
const db = mongoose.connect('mongodb+srv://matthewmata1030:hackreactorfec@cluster0-esl5a.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

module.exports = db;