const {Pool} = require("pg");

const config={
    user:'',
    password:'',
    host:'',
    port:5432,
    database:''
};
const pool = new Pool(config);
const query="SELECT NOW();";
async function fecha(){
    pool.connect(async(error_conexion, client, release)=>{
        let result = await client.query(query);
        console.log(result);
        release();
        pool.end();
    });
}

module.exports = {fecha}
