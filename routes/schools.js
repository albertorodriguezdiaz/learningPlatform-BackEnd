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
    schoolController.obtenerSchool
);

// actualizar school via ID
router.put('/:id',
    [
        check('nombre', 'El Nombre del colegio es obligatorio').not().isEmpty()
    ],
    schoolController.actualizarSchool
);

// Eliminar school via ID
router.delete('/:id',
    schoolController.eliminarSchool
);


module.exports = router;