// routes.js
const express = require('express');
const api = express.Router();
const productosController = require('../controllers/productoControllers');

// Rutas CRUD para productos
api.get('/productos', productosController.getAllProductos);
api.get('/productos/:id', productosController.getProductoById);
// router.post('/productos', productosController.createProducto);
// router.put('/productos/:id', productosController.updateProducto);
// router.delete('/productos/:id', productosController.deleteProducto);

module.exports = api;
