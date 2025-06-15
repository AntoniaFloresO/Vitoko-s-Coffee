const db = require('../config/database');

const Cliente = {
  getAll: (tipo, callback) => {
    let sql = 'SELECT * FROM clientes WHERE estado = 1';

    if (tipo === 'normal') {
      sql += " AND tipo = 'normal'";
    } else if (tipo === 'premium') {
      sql += " AND tipo = 'premium'";
    }

    db.query(sql, (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  },

  desactivar: (id, callback) => {
    const sql = 'UPDATE clientes SET estado = 0 WHERE id_cliente = ?';
    db.query(sql, [id], (err, result) => {
      if (err) return callback(err, null);
      callback(null, result);
    });
  },

  create: (cliente, callback) => {
    const sql = 'INSERT INTO clientes (nombre, ciudad, tipo) VALUES (?, ?, ?)';
    db.query(sql, [cliente.nombre, cliente.ciudad, cliente.tipo], (err, result) => {
      if (err) return callback(err, null);
      callback(null, { id: result.insertId, ...cliente });
    });
  }
};

module.exports = Cliente;