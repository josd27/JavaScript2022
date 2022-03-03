const { Pool } = require("pg");

const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'prueba',
    max: 20,
    //min: 2,->0
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

const pool = new Pool(config);

let valores = ['pantalones', 'verde', 'XS'];

pool.connect((error, client, release)=>{
    client.query("insert into ropa(nombre, color, talla) values ($1, $2, $3) RETURNING *;", valores, (err, result)=>{
        if(err){
            console.log(err);
        }
        release();
        console.log(result);
    });   

    pool.end();
});
