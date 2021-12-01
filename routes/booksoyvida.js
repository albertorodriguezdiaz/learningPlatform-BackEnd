// Rutas para crear libros de Soy Vida
const express = require('express');
const router = express.Router();
const bookSoyVidaController = require('../controllers/bookSoyVidaController')
const { check } = require('express-validator');
// const auth = require('../middleware/auth');

// api/booksoyvida

router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
    ],
    bookSoyVidaController.crearBookSoyVida
);

router.get('/',
    bookSoyVidaController.obtenerBookSoyVida
);


router.put('/:id',
    [
        check('nombre', 'El Nombre del colegio es obligatorio').not().isEmpty()
    ],
    bookSoyVidaController.actualizarBookSoyVida
);


module.exports = router;