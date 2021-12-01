const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar cors
app.use(cors());

// habilitar express .json
app.use(express.json({ extended: true}));

// Puerto de la app
const PORT = process.env.PORT || 4000;

// Importar rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/schools', require('./routes/schools'));
// app.use('/api/activities', require('./routes/activities'));
// app.use('/api/books', require('./routes/books'));
app.use('/api/booksoyvida', require('./routes/booksoyvida'));


// Arrancar la app
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});
