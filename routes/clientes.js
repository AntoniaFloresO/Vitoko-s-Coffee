const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.get('/', clienteController.getClientes);
router.put('/desactivar/:id', clienteController.desactivarCliente);
router.post('/', clienteController.crearCliente);

module.exports = router;