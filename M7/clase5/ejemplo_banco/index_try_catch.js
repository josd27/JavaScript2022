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
    
    /*TRANSACCION*/
    const descontar="UPDATE USUARIOS SET SALDO= SALDO-25000 WHERE NOMBRE= 'Orihana Triana' RETURNING *";
    const depositar="UPDATE USUARIOS SET SALDO= SALDO+25000 WHERE NOMBRE= 'Sergio Palacios' RETURNING *";
    /*Ejecutar las queries*/
    try{
        await client.query("BEGIN");
        const resultado1= await client.query(descontar);    
        console.log(resultado1.rows[0]);

        const resultado2= await client.query(depositar);    
        console.log(resultado2.rowCount, resultado2.rows);

        await client.query("COMMIT");
        
    }   
    catch(ex){
        await client.query("ROLLBACK");
        //console.log(ex);
        console.log("Error: catch",  ex.code, ex.detail);//TODOS LOS OBJ ERROR DE JAVASCRIPT
        console.log("Error:Database", ex.table, ex.constraint);//LOS OBJETOS ERROR DE BASE DE DATOS
    } 
    
    release();
    pool.end();
    console.log("Ejecute los cierres de conexion y pool");
    /*
    finally{
         release();
        pool.end();
    }
    */
});