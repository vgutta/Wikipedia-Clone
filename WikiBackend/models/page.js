const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  sections: [{
    title: String,
    content: String
  }]
});

exports.Page = mongoose.model('Page', schema);