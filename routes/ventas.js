const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');

router.get('/', ventaController.getAll);
router.get('/cliente/:clienteId/fecha/:fecha', ventaController.getByClienteYFecha);
router.get('/:id', ventaController.getById);
router.post('/', ventaController.create);
router.post('/completa', ventaController.createCompleta);

module.exports = router;
