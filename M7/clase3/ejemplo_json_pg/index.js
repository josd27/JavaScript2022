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

let json={    
    rowMode:'array',
    name:'fetch-user',//PreparedStatement-> resultados de la consulta guardada en cache
    text:'select * from ropa',
    values:[]
}

const pool = new Pool(config);

pool.connect(async (err, client, release)=>{
    let resultado = await client.query(json);
    console.log(resultado.rows[0][3]);
    let registros = resultado.rows;
    registros.forEach(ele=>{
        ele.forEach(col=>{
            console.log(col);
        })
        /*console.log(ele.id)        
        console.log(ele.nombre)        
        console.log(ele.color)
        console.log(ele.talla)*/
    });
    release();
    pool.end();
})