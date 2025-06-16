const db = require('../models/db');

exports.obtenerTodos = (req, res) => {
  db.all('SELECT * FROM Producto', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

exports.crear = (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || !precio) return res.status(400).json({ error: 'Faltan campos' });

  const query = 'INSERT INTO Producto (nombre, precio) VALUES (?, ?)';
  db.run(query, [nombre, precio], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: this.lastID, nombre, precio });
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
