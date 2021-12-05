// Rutas para crear libros de Soy Vida
const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController')
const { check } = require('express-validator');
// const auth = require('../middleware/auth');

// api/booksoyvida

router.post('/',
    booksController.crearBooks
);

router.get('/',
    booksController.obtenerBooks
);


router.put('/:id',
    [
        check('nombre', 'El Nombre del libro es obligatorio').not().isEmpty()
    ],
    booksController.actualizarBooks
);

// Eliminar books via ID
router.delete('/:id',
    booksController.eliminarBooks
);



module.exports = router;