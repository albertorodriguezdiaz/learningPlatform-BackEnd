const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    libro: {
        type: mongoose.Schema.Types.ObjectId, //Tipo Join
        ref: 'BookSoyVida'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId, //Tipo Join
        ref: 'User'
    },
    colegio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Book', BookSchema);