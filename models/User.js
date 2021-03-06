const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim:  true
    },
    email: {
        type: String,
        required: true,
        trim:  true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim:  true
    },
    colegio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School'
    },
    tipo: {
        type: String,
        trim:  true,
        default: 'user'
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);