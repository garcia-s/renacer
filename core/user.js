
import crypto from "crypto"
import { v4 } from "uuid"

//Private constructor
//@Constructor

class Hash {
    compare(hash) {
        return this.hash == hash.hash
    }
}

export function CreateUser(userData) {
    const user = {}
    user.id = v4()
    user.email = userData.email
    user.hash = createHash(userData.password)
    return Object.freeze(user)
}

export function createHash(password) {
    const hash = new Hash()
    hash.salt = crypto.randomBytes(64).toString('hex')
    hash.hash = crypto.pbkdf2Sync(password, salt, cycles, 512, 'sha512').toString("hex")
    hash.cycles = crypto.randomInt(7000, 10000)
    return hash
}


export function regenerateHash(hash, cycles, salt) {
    const hash = new Hash()
    hash.hash = hash
    hash.cycles = cycles
    hash.salt = salt
    return hash
}




