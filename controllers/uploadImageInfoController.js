const ImageActivity = require('../models/ImageActivity')
const {validationResult} = require('express-validator');

exports.crearImageActivityInfo = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {
        
        const imageActivity = new ImageActivity(req.body);

        await imageActivity.save();
        res.json({imageActivity});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.obtenerImageActivityInfo = async (req, res) => {

    try {

        const {usuario} = req.query;
        const imageActivity = await ImageActivity.find({usuario});
        res.json({imageActivity});            

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al mostrar books de soy vida');
    }
    
}




// exports.actualizarBooks = async (req, res) => {

//     // revisar si hay errores
//     const errores = validationResult(req);
//     if (!errores.isEmpty()) {
//         return res.status(400).json({errores: errores.array()});
//     }

//     const {nombre} = req.body;
//     const nuevoBookSoyVida = {};

//     if (nombre) {
//         nuevoBookSoyVida.nombre = nombre;
//     }

//     try {

//         // revisar el id
//         let booksoyvida = await Books.findById(req.params.id);

//         // Si el book existe o no
//         if (!booksoyvida) {
//             return res.status(404).json({msg: 'Colegio no encontrado'});
//         }

//         // actualizar
//         booksoyvida = await Books.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoBookSoyVida}, {new: true});
//         res.json({booksoyvida});

//     } catch (error) {

//         console.log(error);
//         res.status(500).send('Hubo un error al actualizar');
//     }

// }


