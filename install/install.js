const pg = require("pg")

const conn = new pg.Pool({
    user: "postgres",
    password: "postgresD",
    database: "postgres",
    host: "127.0.0.1",
    port: 5432,

})

const fs = require("fs")


const install = async () => {
    try {
        const file = fs.readFileSync("./install/config.sql")
        await conn.query(file.toString());
        console.log("TABLA CONFIG CREADA CON EXITO")
    } catch (e) {
        console.log("Error creando la tabla config", e)
    }
}

install()
