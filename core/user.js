
import crypto from "crypto";
import { v4 } from "uuid";

export function CreateUser(userData) {
    //FIXME: VALIDAR LA DATA DEL USUARIO
    const id = v4();
    const salt = crypto.randomBytes(64).toString('hex');
    const cycles = crypto.randomInt(7000, 10000);
    const hash = crypto.pbkdf2Sync(userData.password, salt, cycles, 512, 'sha512').toString("hex");

    return Object.freeze({
        id,
        hash,
        salt,
        cycles,
        email: userData.email,
    })
}




// "hola" + "123asdasdasd"
