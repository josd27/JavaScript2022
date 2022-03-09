const { Pool } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    password: "123456",
    port: 5432,
    // Paso 1
    database: "gym",
});
// Paso 2
const insertar = async (datos) => {
    // Paso 3
    const consulta = {
        text: "INSERT INTO ejercicios values($1, $2, $3, $4) RETURNING *",
        values: datos,
    };
    try {
        const result = await pool.query(consulta);
        return result;
    } catch (error) {
        // Paso 4
        console.log(error.code);
        return error;
    }
}
const consultar = async () => {
    // Paso 2
    try {
        const result = await pool.query("SELECT * FROM ejercicios");
        return result;
    } catch (error) {
        // Paso 3
        console.log(error.code);
        return error;
    }
};
const consultar_uno = async (nombre) => {
    // Paso 2
    try {
        const result = await pool.query(`SELECT * FROM ejercicios where nombre = '${nombre}'`);
        return { rowCount:result.rowCount, rows:result.rows};
    } catch (error) {
        // Paso 3
        console.log(error.code, error.details, error);
        return error;
    }
};
// Paso 4
const editar = async (datos) => {
    // Paso 2
    const consulta = {
        text: `UPDATE ejercicios SET
        nombre = $1,
        series = $2,
        repeticiones = $3,
        descanso = $4
        WHERE nombre = $1 RETURNING *`,
        values: datos,
    };
    // Paso 3
    try {
        const result = await pool.query(consulta);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
const eliminar = async (nombre) => {
    // Paso 2
    try {
        const result = await pool.query(
            `DELETE FROM ejercicios WHERE nombre = '${nombre}'  RETURNING *`
        );
        return result;
    } catch (error) {
        console.log(error.code);
        return error;
    }
}

// Paso 4
module.exports = { insertar, consultar, editar, eliminar, consultar_uno };

