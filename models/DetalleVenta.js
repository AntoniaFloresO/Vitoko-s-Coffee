const db = require('../database/db');

const DetalleVenta = {
    getAll: (callback) => {
        db.query('SELECT * FROM detalle_ventas', callback);
    },

    getByVentaId: (id_venta, callback) => {
        db.query('SELECT * FROM detalle_ventas WHERE id_venta = ?', [id_venta], callback);
    },

    create: (detalle, callback) => {
        const { id_venta, id_producto, cantidad } = detalle;
        db.query(
            'INSERT INTO detalle_ventas (id_venta, id_producto, cantidad) VALUES (?, ?, ?)',
            [id_venta, id_producto, cantidad],
            callback
        );
    }
};

module.exports = DetalleVenta;
