const Cliente = require('../models/Cliente');
const db = require('../database/db');

exports.getClientes = (req, res) => {
  const tipo = req.query.type;
  Cliente.getAll(tipo, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los clientes' });
    }
    res.json(data);
  });
};

exports.desactivarCliente = (req, res) => {
  const id = req.params.id;
  Cliente.desactivar(id, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error al desactivar el cliente' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Cliente no encontrado' });
    }
    res.json({ mensaje: 'Cliente desactivado correctamente' });
  });
};

exports.crearCliente = (req, res) => {
  const { nombre, ciudad, tipo } = req.body;

  if (!nombre || !ciudad || !tipo) {
    return res.status(400).json({ error: 'Faltan datos requeridos' });
  }

  const sql = 'INSERT INTO clientes (nombre, ciudad, tipo) VALUES (?, ?, ?)';
  db.query(sql, [nombre, ciudad, tipo], (err, result) => {
    if (err) {
      console.error('Error en crearCliente:', err);
      return res.status(500).json({ error: 'Error al guardar el cliente' });
    }
    res.status(201).json({ message: 'Cliente registrado', id: result.insertId });
  });
};