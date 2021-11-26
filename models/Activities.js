const mongoose = require('mongoose');

const ActivitiesSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:  true
    },
    propietario: {
        type: mongoose.Schema.Types.ObjectId, //Tipo Join
        ref: 'User'
    },
    libro: {
        type: mongoose.Schema.Types.ObjectId, //Tipo Join
        ref: 'Book'
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', ActivitiesSchema);