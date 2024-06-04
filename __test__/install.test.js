
const pg = require("pg")
const { default: getDatabase } = require("@databases/pg-test")
const { install } = require("../install/install_script.js")

let client

beforeAll(async () => {
    client = new pg.Client(process.env.DATABASE_URL)
    await client.connect()
})

test("Probar la integridad del script de instalacion", async () => {
    let correct = await install(client)
    expect(correct).toBe(true)
})


afterAll(async () => await client.end())
