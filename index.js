const app = require('express')();
const consign = require('consign')
const db = require('./config/db')
const mongodb = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongodb = mongodb

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('BACKEND START ...');
});