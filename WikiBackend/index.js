const express = require('express');
const app = express();
const Router = require('./router.js');

Router.addRoutes(app);

app.listen(3542);

console.log('Listening on 3542.');
