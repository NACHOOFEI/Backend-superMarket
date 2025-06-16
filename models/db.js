const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./superMarket.db',(err)=>{
    if(err){
        console.error('error al conectar la base de datos');
    }else{
        console.log('conexion a la base de datos exitosa')
    }

});

module.exports = db;