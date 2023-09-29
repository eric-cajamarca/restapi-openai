// controller.js
const sql = require('mssql');

// Obtener todos los productos
const getAllProductos = (req, res) => {
  sql.query('SELECT * FROM Productos')
    .then((result) => {
      res.json(result.recordset);
    })
    .catch((err) => {
      console.error('Error al obtener productos:', err);
      res.status(500).json({ error: 'Error al obtener productos' });
    });
};

// Obtener un producto por ID
const getProductoById = (req, res) => {
  const { id } = req.params;
  sql.query(`SELECT * FROM Productos WHERE Id = ${id}`)
    .then((result) => {
      if (result.recordset.length > 0) {
        res.json(result.recordset[0]);
      } else {
        res.status(404).json({ error: 'Producto no encontrado' });
      }
    })
    .catch((err) => {
      console.error('Error al obtener producto por ID:', err);
      res.status(500).json({ error: 'Error al obtener producto por ID' });
    });
};

// Agregar más acciones CRUD según tus necesidades

module.exports = {
  getAllProductos,
  getProductoById,
  // Agregar más funciones aquí
};
