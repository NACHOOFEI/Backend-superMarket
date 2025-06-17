const db = require('../models/db');

exports.obtenerTodos = (req, res) => {
  db.all('SELECT * FROM Producto', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.crearProductoConStock = (req, res) => {
  const { nombre, precio, cantidad_stock, nombreTipoProducto } = req.body;

  if (!nombre || !precio || cantidad_stock === undefined || nombreTipoProducto =='') {
    return res.status(400).json({ error: 'Faltan datos' });
  }

    const queryTipoProducto ='INSERT INTO TipoProducto(nombre) VALUES (?)';
    db.run(queryTipoProducto,[nombre],function(err){
        if (err) return res.status(500).json({ error: 'Error creando de tipo producto: ' + err.message });
      })
      const id_tipo_producto =this.lastID;
  // 1. Insertar en Stock
  const queryStock = 'INSERT INTO Stock (cantidad) VALUES (?)';
  db.run(queryStock, [cantidad_stock], function (err) {
    if (err) return res.status(500).json({ error: 'Error creando stock: ' + err.message });

    const id_stock = this.lastID;

    // 2. Insertar en Producto
    const queryProducto = `
      INSERT INTO Producto (nombre, precio, id_stock, id_tipo_producto)
      VALUES (?, ?, ?, ?)
    `;
    db.run(queryProducto, [nombre, precio, id_stock, id_tipo_producto], function (err) {
      if (err) return res.status(500).json({ error: 'Error creando producto: ' + err.message });

      res.status(201).json({
        id_producto: this.lastID,
        nombre,
        precio,
        stock: cantidad_stock,
        tipoProducto:nombreTipoProducto
      });
    });
  });
};

exports.actualizar = (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  const query = 'UPDATE Producto SET nombre = ?, precio = ? WHERE id = ?';

  db.run(query, [nombre, precio, id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Producto actualizado' });
  });
};

exports.eliminar = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM Producto WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ mensaje: 'Producto eliminado' });
  });
};
