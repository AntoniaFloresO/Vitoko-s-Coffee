const db = require('../database/db');

const Venta = {
    // Obtener todas las ventas
    getAll: (callback) => {
        db.query('SELECT * FROM ventas', callback);
    },

    // Obtener una venta por su ID
    getById: (id, callback) => {
        db.query('SELECT * FROM ventas WHERE id_venta = ?', [id], callback);
    },

    // Insertar una nueva venta
    create: (venta, callback) => {
        const { id_cliente, fecha } = venta;
        db.query('INSERT INTO ventas (id_cliente, fecha) VALUES (?, ?)', [id_cliente, fecha], callback);
    },

    // (query génerica) Consultar ventas por cliente y fecha
    query: (sql, values, callback) => {
        db.query(sql, values, callback);
    }
};

module.exports = Venta;
