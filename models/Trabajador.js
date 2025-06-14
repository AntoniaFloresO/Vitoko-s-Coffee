const db = require('../database/db');

const Trabajador = {
    getAll: (callback) => {
        db.query('SELECT * FROM trabajadores', callback);
    },

    getById: (id, callback) => {
        db.query('SELECT * FROM trabajadores WHERE id_trabajador = ?', [id], callback);
    },

    create: (trabajador, callback) => {
        const { nombre, cargo, estado } = trabajador;
        db.query(
            'INSERT INTO trabajadores (nombre, cargo, estado) VALUES (?, ?, ?)',
            [nombre, cargo, estado || 1],
            callback
        );
    },

    update: (id, trabajador, callback) => {
        const { nombre, cargo, estado } = trabajador;
        db.query(
            'UPDATE trabajadores SET nombre = ?, cargo = ?, estado = ? WHERE id_trabajador = ?',
            [nombre, cargo, estado, id],
            callback
        );
    },

    delete: (id, callback) => {
        // Suponemos que "eliminar" significa desactivar (estado = 0)
        db.query('UPDATE trabajadores SET estado = 0 WHERE id_trabajador = ?', [id], callback);
    }
};

module.exports = Trabajador;
