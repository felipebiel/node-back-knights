const app = require('express')();
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongoose')

app.db = db
app.mongodb = mongoose

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('BACKEND START ...');
});