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
const port = process.env.port || 4000;

// Importar rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/schools', require('./routes/schools'));
app.use('/api/activity', require('./routes/activity'));
app.use('/api/books', require('./routes/books'));
app.use('/api/booksoyvida', require('./routes/booksoyvida'));
app.use('/api/uploadimage', require('./routes/uploadimage'));
app.use('/api/uploadimageinfo', require('./routes/uploadimageinfo'));

app.use('/uploads',express.static('uploads'))

// Arrancar la app
app.listen(port, '0.0.0.0', () => console.log(`Server runs in: ${port}`));
// app.listen(port, () => {
//     console.log(`El servidor esta funcionando en el puerto ${port}`);
// });
