const express = require('express');
const Router = require('./router.js');
const { setupMongoose } = require('./setup-mongoose');

setupMongoose();

const app = express();

Router.addRoutes(app);

app.listen(3542);

console.log('Listening on 3542.');