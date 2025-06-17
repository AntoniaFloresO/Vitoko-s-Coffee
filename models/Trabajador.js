const db = require('../database/db');

const Trabajador = {
    // Retorna todos los trabajadores
    getAll: (callback) => {
        db.query('SELECT * FROM trabajadores', callback);
    },

    // Retorna un trabajador por su ID
    getById: (id, callback) => {
        db.query('SELECT * FROM trabajadores WHERE id_trabajador = ?', [id], callback);
    },

    // Inserta un nuevo trabajador (por defecto el estado = 1)
    create: (trabajador, callback) => {
        const { nombre, cargo, estado } = trabajador;
        db.query(
            'INSERT INTO trabajadores (nombre, cargo, estado) VALUES (?, ?, ?)',
            [nombre, cargo, estado || 1],
            callback
        );
    },

    // Actualiza un trabajador existente
    update: (id, trabajador, callback) => {
        const { nombre, cargo, estado } = trabajador;
        db.query(
            'UPDATE trabajadores SET nombre = ?, cargo = ?, estado = ? WHERE id_trabajador = ?',
            [nombre, cargo, estado, id],
            callback
        );
    },

    // Desactiva un trabajador (estado = 0)
    delete: (id, callback) => {
        // Suponemos que "eliminar" significa desactivar (estado = 0)
        db.query('UPDATE trabajadores SET estado = 0 WHERE id_trabajador = ?', [id], callback);
    }
};

module.exports = Trabajador;
