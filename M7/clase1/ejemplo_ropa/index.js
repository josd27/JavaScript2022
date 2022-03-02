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

async function consulta(){
    let respuesta = await cliente.query("select * from ropa");
    console.log(respuesta.fields);
    cliente.end();
    /*
        cliente.query("select * from ropa", (e,d)=>{console.log(d.rows)});
    */
}

async function insertar(){
    let resultado= await cliente.query("insert into ropa values(4,'jeans', 'negro', 'XXXL') RETURNING *");
    console.log(resultado.rows);
    resultado.fields.forEach(ele=>{
        console.log(ele.name);
    })
    cliente.end();
}
async function insertarv2(){
    let resultado= await cliente.query("insert into ropa values(5,'jeans', 'negro', 'XXXL')");
    console.log(resultado.rowCount);
    cliente.end();
}

async function eliminar(){
    let resultado= await cliente.query("delete from ropa");
    console.log(resultado.rowCount);
    cliente.end();
}

eliminar();
//insertarv2();
//consulta();

