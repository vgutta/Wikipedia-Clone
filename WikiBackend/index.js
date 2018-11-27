const express = require('express');
const Router = require('./router.js');
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/wiki');

console.log('Connected to Mongo database.');

const app = express();

Router.addRoutes(app);

app.listen(3542);

console.log('Listening on 3542.');
