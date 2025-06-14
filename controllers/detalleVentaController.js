const DetalleVenta = require('../models/DetalleVenta');

const detalleVentaController = {
    getAll: (req, res) => {
        DetalleVenta.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    getByVentaId: (req, res) => {
        const { id_venta } = req.params;
        DetalleVenta.getByVentaId(id_venta, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    create: (req, res) => {
        const detalle = req.body;
        DetalleVenta.create(detalle, (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Detalle agregado', id: result.insertId });
        });
    }
};

module.exports = detalleVentaController;
