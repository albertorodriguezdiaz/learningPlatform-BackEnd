// Rutas para crear libros de Soy Vida
const express = require('express');
const router = express.Router();
const activityController = require('../controllers/activityController')
const { check } = require('express-validator');
const auth = require('../middleware/auth');

// api/activity

router.post('/',
    activityController.crearActivity
);

router.get('/',
    // auth,
    activityController.obtenerActivity
);

// router.get('/:usuario',
//     // auth,
//     activityController.obtenerActivity
// );


router.put('/:id',
    // auth,
    activityController.actualizarActivity
);

// Eliminar activity via ID
router.delete('/:id',
    activityController.eliminarActivity
);



module.exports = router;