const { Pool } = require("pg");


const config={  
    user: "postgres",
    host: "localhost",
    password: "123456",
    port: 5432,
    // Paso 1  
    database: "gym"
};
const pool = new Pool(config);
// Paso 2
const insertar = async (datos) => 
{
    // Paso 3
    const consulta = 
    {    
        text: "INSERT INTO ejercicios values($1, $2, $3, $4) RETURNING *",
        values: datos,
    };
    try {
        const result = await pool.query(consulta);
        return {rows:result.rows, rowCount: result.rowCount};
    } 
    catch (error) {
        // Paso 4
        console.log(error.code);
        return error;  
    }
};
// Paso 5
module.exports = { insertar };