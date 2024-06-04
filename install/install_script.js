
const pg = require("pg")
const fs = require("fs")

const dbConn = new pg.Pool({
    user: "postgres",
    password: "postgresD",
    database: "postgres",
    host: "127.0.0.1",
    port: 5432,

})


const install = async (conn) => {
    try {
        const file = fs.readFileSync("./install/database.sql")
        await conn.query("BEGIN;");
        await conn.query(file.toString());
        await conn.query("COMMIT;");
        console.log("TABLA CONFIG CREADA CON EXITO")
        return true
    } catch (e) {
        await conn.query("ROLLBACK;");
        console.log("Error creando la tabla config", e)
        return false
    }
}

module.exports = { dbConn, install }

