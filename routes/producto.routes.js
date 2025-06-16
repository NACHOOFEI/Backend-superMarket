const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

router.get('/', productoController.obtenerTodos);
router.post('/', productoController.crear);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;
