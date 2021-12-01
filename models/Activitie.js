const mongoose = require('mongoose');

const ActivitieSchema = mongoose.Schema({
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
    },
    actividad1: {
        type: Boolean,
        default: false
    },
    actividad2: {
        type: Boolean,
        default: false
    },
    actividad3: {
        type: Boolean,
        default: false
    },
    actividad4: {
        type: Boolean,
        default: false
    },
    actividad5: {
        type: Boolean,
        default: false
    },
    actividad6: {
        type: Boolean,
        default: false
    },
    actividad7: {
        type: Boolean,
        default: false
    },
    actividad8: {
        type: Boolean,
        default: false
    },
    actividad9: {
        type: Boolean,
        default: false
    },
    actividad10: {
        type: Boolean,
        default: false
    },
    actividad11: {
        type: Boolean,
        default: false
    },
    actividad13: {
        type: Boolean,
        default: false
    },
    actividad13: {
        type: Boolean,
        default: false
    },
    actividad14: {
        type: Boolean,
        default: false
    },
    actividad15: {
        type: Boolean,
        default: false
    },
    actividad16: {
        type: Boolean,
        default: false
    },
    actividad17: {
        type: Boolean,
        default: false
    },
    actividad18: {
        type: Boolean,
        default: false
    },
    actividad19: {
        type: Boolean,
        default: false
    },
    actividad20: {
        type: Boolean,
        default: false
    },
    actividad21: {
        type: Boolean,
        default: false
    },
    actividad22: {
        type: Boolean,
        default: false
    },
    actividad23: {
        type: Boolean,
        default: false
    },
    actividad24: {
        type: Boolean,
        default: false
    },
    actividad25: {
        type: Boolean,
        default: false
    },
    actividad26: {
        type: Boolean,
        default: false
    },
    actividad27: {
        type: Boolean,
        default: false
    },
    actividad28: {
        type: Boolean,
        default: false
    },
    actividad29: {
        type: Boolean,
        default: false
    },
    actividad30: {
        type: Boolean,
        default: false
    },
    actividad31: {
        type: Boolean,
        default: false
    },
    actividad32: {
        type: Boolean,
        default: false
    },
    actividad33: {
        type: Boolean,
        default: false
    },
    actividad34: {
        type: Boolean,
        default: false
    },
    actividad35: {
        type: Boolean,
        default: false
    },
    actividad36: {
        type: Boolean,
        default: false
    },
    actividad37: {
        type: Boolean,
        default: false
    },
    actividad38: {
        type: Boolean,
        default: false
    },
    actividad39: {
        type: Boolean,
        default: false
    },
    actividad40: {
        type: Boolean,
        default: false
    },
    actividad41: {
        type: Boolean,
        default: false
    },
    actividad42: {
        type: Boolean,
        default: false
    },
    actividad43: {
        type: Boolean,
        default: false
    },
    actividad44: {
        type: Boolean,
        default: false
    },
    actividad45: {
        type: Boolean,
        default: false
    },
    actividad46: {
        type: Boolean,
        default: false
    },
    actividad47: {
        type: Boolean,
        default: false
    },
    actividad48: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Activitie', ActivitieSchema);