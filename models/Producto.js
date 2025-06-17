const db = require('../database/db');

const Producto = {
  // Obtener todos los productos activos
  getAll: (callback) => {
    db.query('SELECT * FROM productos WHERE estado = 1', callback);
  },

  // Obtener un producto por su ID
  getById: (id, callback) => {
    db.query('SELECT * FROM productos WHERE id_producto = ?', [id], callback);
  },

  // Crear un nuevo producto
  crear: (nombre, stock, precio, callback) => {
    db.query(
      'INSERT INTO productos (nombre, stock, precio, estado) VALUES (?, ?, ?, 1)',
      [nombre, stock, precio],
      (err, result) => {
        if (err) {
          console.error('Error en INSERT:', err.sqlMessage);
          return callback(err);
        }
        callback(null, result);
      }
    );
  },

  // Actualizar el precio de un producto
  updatePrecio: (id, nuevoPrecio, callback) => {
    db.query(
      'UPDATE productos SET precio = ? WHERE id_producto = ? AND estado = 1',
      [nuevoPrecio, id],
      callback
    );
  },

  // Incrementar el stock de un producto
  updateStock: (id, cantidad, callback) => {
    db.query(
      'UPDATE productos SET stock = stock + ? WHERE id_producto = ?',
      [cantidad, id],
      callback
    );
  },

  // Obtener productos vendidos desde una fecha específica
  obtenerVendidosDesdeFecha: (fechaInicio, callback) => {
    const query = `
      SELECT SUM(cantidad) AS total
      FROM detalle_ventas dv
      INNER JOIN ventas v ON dv.id_venta = v.id_venta
      WHERE v.fecha >= ?
    `;
    db.query(query, [fechaInicio], (err, results) => {
      if (err) {
        console.error('Error al consultar productos vendidos:', err);
        return callback(err);
      }

      const total = results[0].total || 0;
      callback(null, total);
    });
  },

  // Deshabilitar un producto 
  // Esto no elimina el producto, solo cambia su estado a inactivo (estado = 0)
  disable: (id, callback) => {
    db.query(
      'UPDATE productos SET estado = 0 WHERE id_producto = ?',
      [id],
      callback
    );
  }
};

module.exports = Producto;
