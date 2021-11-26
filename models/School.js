const mongoose = require('mongoose');

const SchoolSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:  true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', SchoolSchema);