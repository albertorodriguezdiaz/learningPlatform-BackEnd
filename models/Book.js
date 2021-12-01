const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.ObjectId, //Tipo Join
        ref: 'BookSoyVida'
    },
    propietario: {
        type: mongoose.Schema.Types.ObjectId, //Tipo Join
        ref: 'User'
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Book', BookSchema);