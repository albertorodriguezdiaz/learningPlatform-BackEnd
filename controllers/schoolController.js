// const Usuario = require('../models/Usuario');
const School = require('../models/School')
const {validationResult} = require('express-validator');

exports.crearSchool = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {
        // Crear un nuevo colegio
        const colegio = new School(req.body);

        // Guardamos el proyecto
        await colegio.save();
        res.json({colegio});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerColegios = async (req, res) => {

    try {
        // Buscamos los alumnos
        const colegios = await School.find();
        res.json({colegios});            

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al mostrar colegios');
    }
}


// exports.obtenerProyectos = async (req, res) => {

//     try {
//         const proyectos = await Proyecto.find({creador: req.usuario.id});
//         res.json({proyectos});
//     } catch (error) {

//         console.log(error);
//         res.status(500).send('Hubo un error');
//     }

// }

// exports.actualizarProyecto = async (req, res) => {

//     // revisar si hay errores
//     const errores = validationResult(req);
//     if (!errores.isEmpty()) {
//         return res.status(400).json({errores: errores.array()});
//     }

//     const {nombre} = req.body;
//     const nuevoProyecto = {};

//     if (nombre) {
//         nuevoProyecto.nombre = nombre;
//     }

//     try {

//         // revisar el id
//         let proyecto = await Proyecto.findById(req.params.id);

//         // Si el proyecto existe o no
//         if (!proyecto) {
//             return res.status(404).json({msg: 'Proyecto no encontrado'});
//         }

//         // Verificar el creador del proyecto
//         if (proyecto.creador.toString() !== req.usuario.id) {
//             return res.status(401).json({msg: 'No Autorizado'});
//         }

//         // actualizar
//         proyecto = await Proyecto.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoProyecto}, {new: true});

//         res.json({proyecto});

//     } catch (error) {

//         console.log(error);
//         res.status(500).send('Hubo un error al actualizar');
//     }

// }




// exports.eliminarProyecto = async (req, res) => {

//     try {
//           // revisar el id
//           let proyecto = await Proyecto.findById(req.params.id);

//           // Si el proyecto existe o no
//           if (!proyecto) {
//               return res.status(404).json({msg: 'Proyecto no encontrado'});
//           }
  
//           // Verificar el creador del proyecto
//           if (proyecto.creador.toString() !== req.usuario.id) {
//               return res.status(401).json({msg: 'No Autorizado'});
//           }
  
//           // Eliminar
//           // Eliminar el Proyecto
//             await Proyecto.findOneAndRemove({ _id : req.params.id });
//             res.json({ msg: 'Proyecto eliminado '})

//     } catch (error) {

//         console.log(error);
//         res.status(500).send('Hubo un error al eliminar');
//     }

// }




