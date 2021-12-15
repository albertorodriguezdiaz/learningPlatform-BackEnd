// Rutas para crear libros de Soy Vida
const express = require('express');
const router = express.Router();
const imageController = require('../controllers/uploadImage')
const { check } = require('express-validator');
// const auth = require('../middleware/auth');

// api/booksoyvida

router.post('/',
    imageController.crearUploadImage
);



module.exports = router;