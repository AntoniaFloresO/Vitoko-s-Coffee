const Cliente = require('../models/Cliente');

exports.getClientes = (req, res) => {
  Cliente.getAll((err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los clientes' });
    }
    res.json(data);
  });
};