// Rutas para crear libros de Soy Vida
const express = require('express');
const router = express.Router();
const imageActivityInfoController = require('../controllers/uploadImageInfoController');

// api/uploadimageinfo

router.post('/',
    imageActivityInfoController.crearImageActivityInfo
);

router.get('/',
imageActivityInfoController.obtenerImageActivityInfo
);

// router.put('/:id',
//     imageActivityInfoController.actualizarBooks
// );


module.exports = router;