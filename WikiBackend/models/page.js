const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  pagevisits: Number,
  sections: [{
    title: String,
    content: String
  }],
  summary: String
});

exports.Page = mongoose.model('Page', schema);