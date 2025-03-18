const mongoose = require('mongoose');

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

const banco = mongoose.connect('mongodb://localhost:27017/livraria', options);

module.exports = banco;