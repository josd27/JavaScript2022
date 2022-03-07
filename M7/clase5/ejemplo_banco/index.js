const {Pool} = require("pg");

const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'banco',
    max: 20,
    //min: 2,->0
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

const pool = new Pool(config);

pool.connect(async (error_conexion, client, release)=>{
    await client.query("BEGIN");
    /*TRANSACCION*/
    const descontar="UPDATE USUARIOS SET SALDO= SALDO-15000 WHERE NOMBRE= 'Orihana Triana' RETURNING *";
    const depositar="UPDATE USUARIOS SET SALDO= SALDO+15000 WHERE NOMBRE= 'Sergio Palacios' RETURNING *";
    /*Ejecutar las queries*/
         
    const resultado1= await client.query(descontar);    
    console.log(resultado1.rows[0]);

    const resultado2= await client.query(depositar);    
    console.log(resultado2.rowCount, resultado2.rows);

    await client.query("COMMIT");
    release();
    pool.end();
});