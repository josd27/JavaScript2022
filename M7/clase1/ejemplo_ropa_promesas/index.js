const {Client} = require("pg");
const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'prueba'
}

let cliente = new Client(config);
//promesas
//insercion en la table
//lectura en la tabla
//lectura de un solo dato

cliente.connect();

async function insertar(callback){
    cliente.query("INSERT INTO ROPA (NOMBRE, COLOR, TALLA) VALUES ('POLERA','ROJA','xl')", callback);
    //console.log(respuesta.rowCount);
}

async function leer_todo(){
    let respuesta = await cliente.query("select * from ropa");
    console.log(respuesta.rows);
}

async function leer_uno(){
    let respuesta = await cliente.query("select * from ropa where id = 1");
    console.log(respuesta.rows);
}
/*insertar()
.then(()=>{
    leer_todo()
    .then(()=>{
        leer_uno()
        .then(()=>{
            cliente.end()
        })
    })
});*/
insertar()
.then(()=> leer_todo())
.then(()=> leer_uno())
.then(()=>cliente.end())

async function ejecutar(){
    await insertar();
    await leer_todo();
    await leer_uno();
    cliente.end();
}

//ejecutar();
insertar(evaluar);

function evaluar(err, data){
    console.log(data);
    cliente.end();
}
