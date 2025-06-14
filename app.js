const express = require('express');
const app = express();
const clienteRoutes = require('./routes/clientes');
const productosRoutes = require('./routes/productos');
const ventaRoutes = require('./routes/ventas');
const detalleVentasRoutes = require('./routes/detalleVentas');
const trabajadoresRoutes = require('./routes/trabajadores');

app.use('/trabajadores', trabajadoresRoutes);
app.use('/detalle-ventas', detalleVentasRoutes);
app.use('/ventas', ventaRoutes);
app.use('/api/productos', productosRoutes);
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Welcome to Vitoko's Coffee shop");
});

app.use('/api/clientes', clienteRoutes);

// Puerto
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});