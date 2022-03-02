const {Client} = require("pg");
const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'prueba'
}

let cliente = new Client(config);

cliente.connect();

async function consulta(nombre){
    let query="select * from ropa where nombre ='"+nombre+"'";//MALO SQL Injection
    console.log(query);
    /*let resultado = await cliente.query(query);
    console.log(resultado.rows);*/
    cliente.end();
}

consulta("' and drop database prueba");