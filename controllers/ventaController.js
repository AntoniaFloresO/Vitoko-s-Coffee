const Venta = require('../models/Venta');

const ventaController = {
    getAll: (req, res) => {
        Venta.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    getById: (req, res) => {
        const { id } = req.params;
        Venta.getById(id, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            if (result.length === 0) return res.status(404).json({ message: 'Venta no encontrada' });
            res.json(result[0]);
        });
    },

    create: (req, res) => {
        const nuevaVenta = req.body;
        Venta.create(nuevaVenta, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Venta registrada', id: result.insertId });
        });
    }
};

module.exports = ventaController;
