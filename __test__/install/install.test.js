import pg from "pg"
import { install } from "../../install/install_script"

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
