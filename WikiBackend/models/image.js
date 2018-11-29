const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  contentType: String,
  data: mongoose.SchemaTypes.Buffer
});

exports.Image = mongoose.model('Image', schema);