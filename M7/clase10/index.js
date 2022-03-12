const { Pool } = require("pg");
const Cursor = require("pg-cursor");

const config={
    user:'postgres',
    password:'123456',
    host:'localhost',
    port:5432,
    database:'gym',
    max: 20,
    //min: 2,->0
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
}

async function ejecutar(){

    const pool = new Pool(config);
    const client = await pool.connect();
    const consulta = new Cursor("select * from usuarios");
    const cursor = client.query(consulta); 

    function mostrarData(err, data){
        console.log(data)
        if(data.length!=0){
            cursor.read(100, mostrarData);
        }
    }
    //320
    cursor.read(100, mostrarData);
    //cursor.read(100, mostrarData); MALO
    //cursor.read(100, mostrarData);
    //cursor.read(100, mostrarData);

}
ejecutar();