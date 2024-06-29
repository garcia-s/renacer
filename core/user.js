
import { pbkdf2Sync, randomBytes, randomInt } from "crypto"
import { v4 } from "uuid";


/**
*Tipo para el objeto de creacion de usuario
*@typedef {Object} UserCreationData 
*@property {string} email 
*@property {string} password
**/

/**
*Tipo para el usuario ya generado
*@typedef {Object} User
*@property {string} id 
*@property {string} email 
*@property {Hash} hash
**/
class Hash {

    /**
    * Constructor para el objeto hash, para regenerar un hash provea tambien la salt y los ciclos anteriores que tiene almacenados
    * @param {string} password - Hash of the password 
    * @param {string | null} salt - Hash of the password 
    * @param {number | null} cycles - Hash of the password 
    **/
    constructor(password, salt = null, cycles = null) {
        this.salt = salt ?? randomBytes(64).toString('hex')
        this.cycles = cycles ?? randomInt(7000, 10000)
        this.hash = pbkdf2Sync(password, this.salt, this.cycles, 512, 'sha512').toString("hex")
    }

    /**
    *@method compare
    *@param {string} password
    **/
    compare(password) {
        return this.hash == new Hash(password).hash
    }
}

/**
*Crea un usuario y el hash de su contraseña correspondiente
*@method CreateUser
*@param {UserCreationData} userData
*@returns {Readonly<User>}
**/
export function CreateUser(userData) {
    const user = {}
    user.id = v4()
    user.email = userData.email
    user.hash = new Hash(userData.password);
    return Object.freeze(user)
}


