const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controllers');

router.get('/', productoController.obtenerTodos);
router.post('/', productoController.crearProductoConStock);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;
