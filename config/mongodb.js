const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo:27017', { useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(e => {
        console.log('ERRO: Mongo DB não conectado!')
    })