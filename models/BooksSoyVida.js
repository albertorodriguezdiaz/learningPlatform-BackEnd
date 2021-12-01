const mongoose = require('mongoose');

const BookSoyVidaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:  true
    }
});

module.exports = mongoose.model('BookSoyVida', BookSoyVidaSchema);