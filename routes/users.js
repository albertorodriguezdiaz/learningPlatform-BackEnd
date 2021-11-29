// Rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/userController')
const { check } = require('express-validator');
const auth = require('../middleware/auth');

// Crear un usuario
// api/users
router.post('/',
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('email','Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({min:6})
    ],
    usuarioController.crearUsuario,
);

router.get('/',
    // auth,
    // usuarioController.obtenerAlumnos
    usuarioController.obtenerAlumnosByColegio
);


// actualizar Usuario via ID
router.put('/:id',
    [
        check('nombre', 'El Nombre del usuario es obligatorio').not().isEmpty()
    ],
    usuarioController.actualizarUsuario
);

// Eliminar Usuario via ID
router.delete('/:id',
    usuarioController.eliminarUsuario
);



module.exports = router;