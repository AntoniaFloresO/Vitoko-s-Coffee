const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');
const ventaRoutes = require('./routes/ventas');
const detalleVentasRoutes = require('./routes/detalleVentas');
const trabajadoresRoutes = require('./routes/trabajadores');

app.use(express.json());
app.use('/api/clientes', clienteRoutes);
app.use('/api/productos', productosRoutes);
app.use('/ventas', ventaRoutes);
app.use('/detalle-ventas', detalleVentasRoutes);
app.use('/trabajadores', trabajadoresRoutes);

app.get('/', (req, res) => {
  res.send("Welcome to Vitoko's Coffee shop");
});

// Puerto
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Manejo de errores de forma general
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ mensaje: 'Error interno del servidor' });
});

const cors = require('cors');
app.use(cors());