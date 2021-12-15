const mongoose = require('mongoose');

const ImageActivity = mongoose.Schema({
    activity: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    libro: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    },
    actividad: {
        type: String,
        required: true
    },
    registro: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String,
        required: false
    },
    texto: {
        type: String,
        required: false
    }

});

module.exports = mongoose.model('ImageActivity', ImageActivity);