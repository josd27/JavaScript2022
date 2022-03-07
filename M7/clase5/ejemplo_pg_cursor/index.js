const { Pool } = require("pg");
const Cursor = require("pg-cursor");

const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'clientes',
    max: 20,
    //min: 2,->0
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

const pool = new Pool(config);

let query={
    text:''
}

pool.connect((error_conexion, cliente, release)=>{
    const consulta = new Cursor("select * from usuarios");
    const cursor = cliente.query(consulta);  
    cursor.read(20, (error_lectura_cursor, rows)=>{
        console.log(rows);
        cursor.close(); 
        release();          
        pool.end();       
        
    })
     
}); 