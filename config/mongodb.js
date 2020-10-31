const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/knight', { useNewUrlParser: true,  useUnifiedTopology: true })
    .catch(e => {
        console.log('ERRO: Mongo DB não conectado!')
    })