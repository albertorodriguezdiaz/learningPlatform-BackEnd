// Rutas para crear colegios
const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController')
const { check } = require('express-validator');
const auth = require('../middleware/auth');

// Crear un school
// api/schools

router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
    ],
    schoolController.crearSchool
);

router.get('/',
    schoolController.obtenerColegios
);


module.exports = router;