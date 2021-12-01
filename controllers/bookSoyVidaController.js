const BookSoyVida = require('../models/BooksSoyVida')
const {validationResult} = require('express-validator');

exports.crearBookSoyVida = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {
        // Crear un nuevo books Soy Vida
        const booksoyvida = new BookSoyVida(req.body);

        // Guardamos el proyecto
        await booksoyvida.save();
        res.json({booksoyvida});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerBookSoyVida = async (req, res) => {

    try {
        // Buscamos los books de soy Vida
        const booksoyvida = await BookSoyVida.find();
        res.json({booksoyvida});            

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al mostrar books de soy vida');
    }
}




exports.actualizarBookSoyVida = async (req, res) => {

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
        let booksoyvida = await BookSoyVida.findById(req.params.id);

        // Si el book existe o no
        if (!booksoyvida) {
            return res.status(404).json({msg: 'Colegio no encontrado'});
        }

        // actualizar
        booksoyvida = await BookSoyVida.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoBookSoyVida}, {new: true});

        res.json({booksoyvida});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }

}





