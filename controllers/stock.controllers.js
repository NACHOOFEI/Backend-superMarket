const db = require('../models/db');

exports.obtenerTodos = (req,res)=>{
    db.all('SELECT * FROM vStockProducto',(err,rows)=>{
        if(err)return res.status(500).json({error:err.message('no hay ningun producto')});
        res.json(res);
    })
}

exports.actualizarStockPorProducto = (req, res) => {
const { id_producto } = req.params;
const { nueva_cantidad } = req.body;

    if (nueva_cantidad === undefined) {
    return res.status(400).json({ error: 'Falta la nueva cantidad' });
    }
const queryStockId = 'SELECT id_stock FROM Producto WHERE id = ?';
db.get(queryStockId, [id_producto], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Producto no encontrado' });

    const id_stock = row.id_stock;


    const queryUpdateStock = 'UPDATE Stock SET cantidad = ? WHERE id = ?';

    db.run(queryUpdateStock, [nueva_cantidad, id_stock], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    res.status(200).json({ mensaje: 'Stock actualizado', id_producto, nueva_cantidad });
    });
});
};