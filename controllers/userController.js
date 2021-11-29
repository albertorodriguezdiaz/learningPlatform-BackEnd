const Usuario = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const School = require('../models/School');



exports.crearUsuario = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {email, password} = req.body;

    try {
        // Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({email});

        if (usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe'});
        }

        // Crea el nuevo usuario
        usuario = new Usuario(req.body);


        // Hashear el password
        // ( salt ) crea un hash diferente para passwords iguales
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);


        // Guardar usuario
        await usuario.save();

        // Crear y firmnar el JWT
        const payload = {
            usuario:{
                id: usuario.id
            }
        };

        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 // 1hora
        }, (error, token) => {
           
            if(error) throw error;

            // Mensaje de confirmacion
            console.log(token);
            res.json({ token: token, msg:'Usuario creado correctamente'});
           
        });

        // Mensaje de confirmacion
        // res.json({ msg: 'El usuario fue creado exitosamente'});

    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');
    }
}




// exports.obtenerAlumnos = async (req, res) => {

//       // revisar si hay errores
//     const errores = validationResult(req);
//     if (!errores.isEmpty()) {
//         return res.status(400).json({errores: errores.array()});
//     }

//     try {
//         // Buscamos los alumnos
//         const alumnos = await Usuario.find({tipo: 'user'});
//         res.json({alumnos});            

//     } catch (error) {

//         console.log(error);
//         res.status(500).send('Hubo un error al mostrar alumnos');
//     }
// }


exports.obtenerAlumnosByColegio = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {

        // Extraer el colegio
        // const {colegio} = req.body;
        const {colegio} = req.query;

        // revisar el id
        const existeColegio = await School.findById(colegio);

        // Si el proyecto existe o no
        if (!existeColegio) {
            // return res.status(404).json({msg: 'Proyecto no encontrado'});
            const alumnos = await Usuario.find({tipo: 'user'});
            res.json({alumnos}) ;
        }else{
            const alumnos = await Usuario.find({colegio}).sort({registro : -1});
            res.json({alumnos});
        }

        

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar alumnos por Colegio');
    }
}




exports.actualizarUsuario = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {nombre, email, colegio, tipo} = req.body;
    const nuevoUsuario = {};

    if (nombre) {
        nuevoUsuario.nombre = nombre;
        nuevoUsuario.email = email;
        nuevoUsuario.colegio = colegio;
        nuevoUsuario.tipo = tipo;
    }

    try {

        // revisar el id
        let usuario = await Usuario.findById(req.params.id);

        // Si el school existe o no
        if (!usuario) {
            return res.status(404).json({msg: 'Usuario no encontrado'});
        }

        // actualizar
        usuario = await Usuario.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoUsuario}, {new: true});
        res.json({usuario});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al actualizar el usuario');
    }

}




exports.eliminarUsuario = async (req, res) => {

    try {
          // revisar el id
          let usuario = await Usuario.findById(req.params.id);

          // Si el colegio existe o no
          if (!usuario) {
              return res.status(404).json({msg: 'Usuario no encontrado'});
          }
  
          // Eliminar el Colegio
            await Usuario.findOneAndRemove({ _id : req.params.id });
            res.json({ msg: 'Usuario eliminado '})

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al eliminar el usuario');
    }

}


