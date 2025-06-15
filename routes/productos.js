const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.listarProductos);
router.post('/', productoController.crearProducto);
router.put('/:id/precio', productoController.actualizarPrecio);
router.put('/:id/stock', productoController.incrementarStock);
router.delete('/:id', productoController.deshabilitarProducto);
router.get('/sold/estaSemana', productoController.obtenerVendidosEstaSemana);
router.get('/vendidos/añoActual', productoController.obtenerVendidosAnioActual);

module.exports = router;
