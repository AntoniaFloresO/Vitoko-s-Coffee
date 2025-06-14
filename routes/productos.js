const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.listarProductos);
router.post('/', productoController.crearProducto);
router.put('/:id/precio', productoController.actualizarPrecio);
router.delete('/:id', productoController.deshabilitarProducto);

module.exports = router;
