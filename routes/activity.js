// Rutas para crear libros de Soy Vida
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController')
const { check } = require('express-validator');
// const auth = require('../middleware/auth');

// api/activity

router.post('/',
    activityController.crearActivity
);

router.get('/',
    activityController.obtenerActivity
);


router.put('/:id',
    activityController.actualizarActivity
);

// Eliminar activity via ID
router.delete('/:id',
    activityController.eliminarActivity
);



module.exports = router;