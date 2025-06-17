const db = require('../database/db');

const DetalleVenta = {
    // Obtiene todos los detalles de ventas
    getAll: (callback) => {
        db.query('SELECT * FROM detalle_ventas', callback);
    },

    // Obtiene un detalle de venta por id_venta
    getByVentaId: (id_venta, callback) => {
        db.query('SELECT * FROM detalle_ventas WHERE id_venta = ?', [id_venta], callback);
    },

    // Crea un nuevo detalle de venta
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
