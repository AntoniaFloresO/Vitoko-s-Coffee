const express = require('express');
const router = express.Router();
const detalleVentaController = require('../controllers/detalleVentaController');

router.get('/', detalleVentaController.getAll);
router.get('/:id_venta', detalleVentaController.getByVentaId);
router.post('/', detalleVentaController.create);

module.exports = router;
