const Producto = require('../models/Producto');

exports.listarProductos = (req, res) => {
  Producto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.crearProducto = (req, res) => {
  Producto.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Producto creado', id: result.insertId });
  });
};

exports.actualizarPrecio = (req, res) => {
  const { id } = req.params;
  const { precio } = req.body;

  Producto.updatePrecio(id, precio, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Precio actualizado' });
  });
};

exports.deshabilitarProducto = (req, res) => {
  const { id } = req.params;

  Producto.disable(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Producto deshabilitado' });
  });
};
