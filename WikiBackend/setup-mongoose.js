const mongoose = require('mongoose');

exports.setupMongoose = () => {

  mongoose.connect('mongodb://localhost/wiki');

}