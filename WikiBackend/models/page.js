const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  pagevisits: Number,
  pageSummary: String,
  createdDate: Date,
  sections: [{
    title: String,
    content: String,
  }]
});

exports.Page = mongoose.model('Page', schema);