import { dbConn } from "@/install/install_script"


async function save(user) {
    try {
        await dbConn.query(
            "INSERT INTO users (id, role, email, hash, salt, cycles) VALUES ($1, $2, $3, $4, $5 ,$6)",
            [
                user.id,
                user.role,
                user.email,
                user.hash,
                user.salt,
                user.cycles,
            ],
        )

    } catch (e) {
        throw (e)
    }
}


async function getByEmail(email) {
    try {
        const res = await dbConn.query("SELECT * FROM users WHERE email=$1", [email])
        return res.rows[0];
    } catch (e) {
        throw (e)
    }
}

export default userRepo = { save, }
