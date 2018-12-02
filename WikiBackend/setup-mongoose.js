const mongoose = require('mongoose');

exports.setupMongoose = () => {

  mongoose.connect('mongodb+srv://dbAdmin:4741Admin@udwiki-dlxhh.mongodb.net/test?retryWrites=true');

}