const express = require('express');
const router = express.Router();
const trabajadorController = require('../controllers/trabajadorController');

router.get('/', trabajadorController.getAll);
router.get('/:id', trabajadorController.getById);
router.post('/', trabajadorController.create);
router.put('/:id', trabajadorController.update);
router.delete('/:id', trabajadorController.delete);

module.exports = router;
