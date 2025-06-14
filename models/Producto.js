const db = require('../database/db');

const Producto = {
  getAll: (callback) => {
    db.query('SELECT * FROM productos WHERE estado = 1', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM productos WHERE id_producto = ?', [id], callback);
  },

  create: (producto, callback) => {
    const { nombre, stock, precio } = producto;
    db.query(
      'INSERT INTO productos (nombre, stock, precio) VALUES (?, ?, ?)',
      [nombre, stock, precio],
      callback
    );
  },

  updatePrecio: (id, nuevoPrecio, callback) => {
    db.query(
      'UPDATE productos SET precio = ? WHERE id_producto = ?',
      [nuevoPrecio, id],
      callback
    );
  },

  disable: (id, callback) => {
    db.query(
      'UPDATE productos SET estado = 0 WHERE id_producto = ?',
      [id],
      callback
    );
  }
};

module.exports = Producto;
