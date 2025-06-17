const DetalleVenta = require('../models/DetalleVenta');

const detalleVentaController = {
    // Obtiene todos los detalles de ventas
    getAll: (req, res) => {
        DetalleVenta.getAll((err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    // Obtiene un detalle de venta por su ID de venta
    getByVentaId: (req, res) => {
        const { id_venta } = req.params;
        DetalleVenta.getByVentaId(id_venta, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results);
        });
    },

    // Crear detalles asociados a una venta
    create: (req, res) => {
        const { id_venta, detalles } = req.body;

        // Validar que id_venta exista
        if (!id_venta || !Array.isArray(detalles)) {
            return res.status(400).json({ error: 'Datos incompletos' });
        }

        // Mapear los detalles para armar la matriz de valores
        const values = detalles.map(detalle => [
            id_venta,
            detalle.id_producto,
            detalle.cantidad,
            detalle.precio
        ]);

        const query = `
            INSERT INTO detalle_ventas (id_venta, id_producto, cantidad, precio)
            VALUES ?
        `;

        // Se requiere de la base de datos para ejecutar la consulta
        const db = require('../database/db');
        db.query(query, [values], (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.status(201).json({ message: 'Detalle de venta registrado', insertId: result.insertId });
        });
    }
};

module.exports = detalleVentaController;
