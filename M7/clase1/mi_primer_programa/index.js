const {Client} = require("pg");
const traer_usuarios="SELECT * FROM USUARIOS";
let connectionString="postgresql://postgres:123456@localhost:5432/prueba";
const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'prueba'
}
let cliente = new Client({
    connectionString
});
cliente.connect();

cliente.query(traer_usuarios, (err, data)=>{
    data.rows.forEach(ele=>{
        console.log("Su nombre es", ele.nombre, "Su apellido es", ele.apellido, "Su id es", ele.id);
    });
    //console.log(data.rows);
});

cliente.query('select now() as fecha', (err, data)=>{
    console.log(data.rows);
    
    cliente.end();    
});

//console.log(cliente);