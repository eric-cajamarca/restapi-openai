// app.js
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

// Configurar la conexión a la base de datos
const sql = require('mssql');

const dbConfig = {
  server: process.env.DB_SERVER,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  options:{
    encrypt:false,
    
},
};

sql.connect(dbConfig)
  .then(() => {
    console.log('Conexión a SQL Server exitosa');
  })
  .catch((err) => {
    console.error('Error de conexión a SQL Server:', err);
  });

// Agregar rutas
const routesproductos = require('../src/routes/productos');
app.use('/api', routesproductos);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Servidor en ejecución en el puerto ${port}');
});
