const Producto = require('../models/Producto');

exports.listarProductos = (req, res) => {
  Producto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.crearProducto = (req, res) => {
  const { name, price, stock } = req.body;

  console.log('Datos recibidos para crear producto:', req.body);

  if (!name || !price) {
    return res.status(400).json({ error: 'Faltan campos obligatorios' });
  }

  Producto.crear(name, stock, price, (err, result) => {
    if (err) {
      console.error('Error al crear producto:', err);
      return res.status(500).json({ error: 'Error al guardar el producto' });
    }
    res.status(201).json({ message: 'Producto creado correctamente' });
  });
};

exports.actualizarPrecio = (req, res) => {
  const id = req.params.id;
  const { price } = req.body;

  console.log('Actualizar precio, id:', id);
  console.log('Nuevo precio:', price);

  if (!price || isNaN(price)) {
    return res.status(400).json({ error: 'Precio inválido' });
  }

  Producto.updatePrecio(id, price, (err, result) => {
    if (err) {
      console.error('Error en query:', err);
      return res.status(500).json({ error: 'Error al actualizar precio' });
    }

    if (result.affectedRows === 0) {
      // No encontró producto o no actualizó nada
      return res.status(404).json({ error: 'Producto no encontrado o precio igual' });
    }

    console.log('Precio actualizado correctamente');
    res.json({ message: 'Precio actualizado correctamente' });
  });
};

exports.incrementarStock = (req, res) => {
  const  id  = req.params.id;
  const { amount } = req.body;

  if (!price || isNaN(price)) {
    return res.status(400).json({ error: 'Precio inválido' });
  }

  Producto.updatePrecio(id, price, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message || 'Error al actualizar precio' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    res.json({ message: 'Precio actualizado correctamente' });
  });
};

exports.deshabilitarProducto = (req, res) => {
  const { id } = req.params;

  Producto.disable(id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Producto deshabilitado' });
  });
};

// Vendidos esta semana
exports.obtenerVendidosEstaSemana = (req, res) => {
  const hoy = new Date();
  const primerDiaSemana = new Date(hoy.setDate(hoy.getDate() - hoy.getDay() + 1)); // Lunes
  const fechaInicio = primerDiaSemana.toISOString().split('T')[0];

  Producto.obtenerVendidosDesdeFecha(fechaInicio, (err, total) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener ventas de esta semana' });
    }
    res.json({ total_vendidos: total });
  });
};

// Vendidos año actual
exports.obtenerVendidosAnioActual = (req, res) => {
  const fechaInicio = new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];

  Producto.obtenerVendidosDesdeFecha(fechaInicio, (err, total) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener ventas del año' });
    }
    res.json({ total_vendidos: total });
  });
};

