import { CreateUser } from "../../core/user";

test("Test de creacion de usuario", () => {

    const userData = {
        email: "garciajj18@gmail.com",
        password: "hola123",
    }

    const user = CreateUser(userData)
    expect(typeof user.id).toBe("string")
    expect(typeof user.email).toBe("string")
    expect(typeof user.salt).toBe("string")
    expect(typeof user.hash).toBe("string")
    expect(typeof user.cycles).toBe("number")
    // expect(typeof user.role).toBe("string")
})
