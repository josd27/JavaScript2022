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

let pool = new Pool(config);

pool.connect((error, client, release)=>{
    client.query("select now() as fecha", (err, result)=>{
        console.log(result.rows, result.fields);
    });
    pool.end();
})