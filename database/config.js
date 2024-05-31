import conn from "./db";

const getAll = async () => {
    try {
        const result = await conn.query("SELECT * FROM config");
        return result.rows
    } catch (e) {
        throw e
    }
}

export default { getAll }
