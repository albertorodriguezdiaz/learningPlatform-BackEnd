const Books = require('../models/Book')
const {validationResult} = require('express-validator');

exports.crearBooks = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {usuario, libro} = req.body;

    // Revisar que el usuario registrado sea unico
    let libroExiste = await Books.findOne({usuario, libro});

    if (libroExiste) {
        return res.status(400).json({ msg: 'El usuario ya tiene este libro registrado'});
    }

    try {
        // Crear un nuevo books Soy Vida
        const bookuser = new Books(req.body);

        // Guardamos el proyecto
        await bookuser.save();
        res.json({bookuser});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }

}



exports.obtenerBooks = async (req, res) => {

    try {
        const {usuario, libro, colegio} = req.query;

         if(libro && colegio){
            const bookuser = await Books.find({libro, colegio});
            res.json({bookuser}); 
         }else if (usuario) {
            // Buscamos los books de soy Vida por usuario
            const bookuser = await Books.find({usuario});
            res.json({bookuser}); 
        }else {
            // Buscamos todos los books para mostrar al admin
            const bookuser = await Books.find();
            res.json({bookuser}); 
        }
         

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al mostrar books de soy vida');
    }
}




exports.actualizarBooks = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {nombre} = req.body;
    const nuevoBookSoyVida = {};

    if (nombre) {
        nuevoBookSoyVida.nombre = nombre;
    }

    try {

        // revisar el id
        let booksoyvida = await Books.findById(req.params.id);

        // Si el book existe o no
        if (!booksoyvida) {
            return res.status(404).json({msg: 'Colegio no encontrado'});
        }

        // actualizar
        booksoyvida = await Books.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoBookSoyVida}, {new: true});
        res.json({booksoyvida});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }

}






exports.eliminarBooks = async (req, res) => {

    try {
          // revisar el id
          let booksoyvida = await Books.findById(req.params.id);

          // Si el colegio existe o no
          if (!booksoyvida) {
              return res.status(404).json({msg: 'Book no encontrado'});
          }
  
          // Eliminar el Colegio
            await Books.findOneAndRemove({ _id : req.params.id });
            res.json({ msg: 'Book eliminado '})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar');
    }

}


