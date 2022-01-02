const Activity = require('../models/Activity')
const {validationResult} = require('express-validator');

exports.crearActivity = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {
        // Crear un nuevo Activitys Soy Vida
        const activity = new Activity(req.body);

        // Guardamos el proyecto
        await activity.save();
        res.json({activity});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


// exports.obtenerActivityAll = async (req, res) => {

//     try {
//         // Buscamos los Activity de soy Vida
//         const activity = await Activity.find();
//         res.json({activity});            

//     } catch (error) {

//         console.log(error);
//         res.status(500).send('Hubo un error al mostrar Activitys de soy vida');
//     }
// }


exports.obtenerActivity = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    try {

        // Extraer la actividad
        // const {usuario} = req.body;
        const {usuario, libro} = req.query;

         const actividad = await Activity.find({usuario, libro});
        res.json({actividad});
              

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al mostrar Activitys de soy vida');
    }
}




exports.actualizarActivity = async (req, res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()});
    }

    const {
        usuario, actividad1, actividad2, actividad3, actividad4, actividad5, actividad6, actividad7, actividad8, actividad9, actividad10, 
        actividad11, actividad12, actividad13, actividad14, actividad15, actividad16, actividad17, actividad18, actividad19, actividad20, 
        actividad21, actividad22, actividad23, actividad24, actividad25, actividad26, actividad27, actividad28, actividad29, actividad30, 
        actividad31, actividad32, actividad33, actividad34, actividad35, actividad36, actividad37, actividad38, actividad39, actividad40, 
        actividad41, actividad42, actividad43, actividad44, actividad45, actividad46, actividad47, actividad48
    } = req.body;
    const nuevaActivity = {};

    if (usuario) {
        nuevaActivity.usuario = usuario,
        nuevaActivity.actividad1 = actividad1;
        nuevaActivity.actividad2 = actividad2;
        nuevaActivity.actividad3 = actividad3;
        nuevaActivity.actividad4 = actividad4;
        nuevaActivity.actividad5 = actividad5;
        nuevaActivity.actividad6 = actividad6;
        nuevaActivity.actividad7 = actividad7;
        nuevaActivity.actividad8 = actividad8;
        nuevaActivity.actividad9 = actividad9;
        nuevaActivity.actividad10 = actividad10;
        nuevaActivity.actividad11 = actividad11;
        nuevaActivity.actividad12 = actividad12;
        nuevaActivity.actividad13 = actividad13;
        nuevaActivity.actividad14 = actividad14;
        nuevaActivity.actividad15 = actividad15;
        nuevaActivity.actividad16 = actividad16;
        nuevaActivity.actividad17 = actividad17;
        nuevaActivity.actividad18 = actividad18;
        nuevaActivity.actividad19 = actividad19;
        nuevaActivity.actividad20 = actividad20;
        nuevaActivity.actividad21 = actividad21;
        nuevaActivity.actividad22 = actividad22;
        nuevaActivity.actividad23 = actividad23;
        nuevaActivity.actividad24 = actividad24;
        nuevaActivity.actividad25 = actividad25;
        nuevaActivity.actividad26 = actividad26;
        nuevaActivity.actividad27 = actividad27;
        nuevaActivity.actividad28 = actividad28;
        nuevaActivity.actividad29 = actividad29;
        nuevaActivity.actividad30 = actividad30;
        nuevaActivity.actividad31 = actividad31;
        nuevaActivity.actividad32 = actividad32;
        nuevaActivity.actividad33 = actividad33;
        nuevaActivity.actividad34 = actividad34;
        nuevaActivity.actividad35 = actividad35;
        nuevaActivity.actividad36 = actividad36;
        nuevaActivity.actividad37 = actividad37;
        nuevaActivity.actividad38 = actividad38;
        nuevaActivity.actividad39 = actividad39;
        nuevaActivity.actividad40 = actividad40;
        nuevaActivity.actividad41 = actividad41;
        nuevaActivity.actividad42 = actividad42;
        nuevaActivity.actividad43 = actividad43;
        nuevaActivity.actividad44 = actividad44;
        nuevaActivity.actividad45 = actividad45;
        nuevaActivity.actividad46 = actividad46;
        nuevaActivity.actividad47 = actividad47;
        nuevaActivity.actividad48 = actividad48;
    }

    try {

        // revisar el id
        let usuario = await Activity.findById(req.params.id);

        // Si la activity existe o no
        if (!usuario) {
            return res.status(404).json({msg: 'Activity no encontrado'});
        }

        // actualizar
        const activity = await Activity.findByIdAndUpdate({_id: req.params.id}, {$set:nuevaActivity}, {new: true});
        res.json({activity});

    } catch (error) {

        console.log(error);
        res.status(500).send('Hubo un error al actualizar');
    }

}






exports.eliminarActivity = async (req, res) => {

    try {
          // revisar el id
          let activity = await Activity.findById(req.params.id);

          // Si la Activity existe o no
          if (!activity) {
              return res.status(404).json({msg: 'Activity no encontrada'});
          }
  
          // Eliminar la Activity
            await Activity.findOneAndRemove({ _id : req.params.id });
            res.json({ msg: 'Activity eliminada '})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar');
    }

}


