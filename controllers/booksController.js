const Books = require('../models/Book')
const {validationResult} = require('express-validator');
const Book = require('../models/Book');

exports.crearBooks = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {
        // Crear un nuevo books Soy Vida
        const booksoyvida = new Books(req.body);

        // Guardamos el proyecto
        await booksoyvida.save();
        res.json({booksoyvida});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerBooks = async (req, res) => {

    try {
        // Buscamos los books de soy Vida
        const booksoyvida = await Books.find();
        res.json({booksoyvida});            

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
          let booksoyvida = await Book.findById(req.params.id);

          // Si el colegio existe o no
          if (!booksoyvida) {
              return res.status(404).json({msg: 'Book no encontrado'});
          }
  
          // Eliminar el Colegio
            await Book.findOneAndRemove({ _id : req.params.id });
            res.json({ msg: 'Book eliminado '})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar');
    }

}


