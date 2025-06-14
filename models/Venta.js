const db = require('../database/db');

const Venta = {
    getAll: (callback) => {
        db.query('SELECT * FROM ventas', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM ventas WHERE id_venta = ?', [id], callback);
    },

    create: (venta, callback) => {
        const { id_cliente, fecha } = venta;
        db.query('INSERT INTO ventas (id_cliente, fecha) VALUES (?, ?)', [id_cliente, fecha], callback);
    }
};

module.exports = Venta;
