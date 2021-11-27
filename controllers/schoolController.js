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


exports.obtenerSchool = async (req, res) => {

    try {
        // Buscamos los alumnos
        const colegios = await School.find();
        res.json({colegios});            

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al mostrar colegios');
    }
}




exports.actualizarSchool = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {nombre} = req.body;
    const nuevoSchool = {};

    if (nombre) {
        nuevoSchool.nombre = nombre;
    }

    try {

        // revisar el id
        let colegio = await School.findById(req.params.id);

        // Si el school existe o no
        if (!colegio) {
            return res.status(404).json({msg: 'Colegio no encontrado'});
        }

        // actualizar
        colegio = await School.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoSchool}, {new: true});

        res.json({colegio});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }

}




exports.eliminarSchool = async (req, res) => {

    try {
          // revisar el id
          let colegio = await School.findById(req.params.id);

          // Si el colegio existe o no
          if (!colegio) {
              return res.status(404).json({msg: 'Proyecto no encontrado'});
          }
  
          // Eliminar el Colegio
            await School.findOneAndRemove({ _id : req.params.id });
            res.json({ msg: 'Colegio eliminado '})

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al eliminar');
    }

}


