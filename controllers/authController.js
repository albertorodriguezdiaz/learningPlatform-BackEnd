const Usuario = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {email, password} = req.body;

    try {
        // Revisar que se un usuario registrado
        let usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.status(400).json({msg: 'El usuario no existe'});
        }

        // Revisar su password
        const passCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passCorrecto) {
            return res.status(400).json({msg: 'Password incorrecto'});
        }


        // Crear y firmnar el JWT si todo es correcto
        const payload = {
            usuario:{
                id: usuario.id
            }
        };
        
        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 36000 // 1hora
        }, (error, token) => {
           
            if(error) throw error;

            // Mensaje de confirmacion
            console.log(token);
            res.json({ token: token, msg:'Usuario Correcto'});
           
        });
        
    } catch (error) {
        console.log(error);
    }

}



// Obtener que el usuario esta autenticado
exports.usuarioAutenticado = async (req, res) =>{
    try {
        // Menos el password -password
        const usuario = await Usuario.findById(req.usuario.id).select('-password');
        res.json({usuario});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Hubo un error'});
    }
}