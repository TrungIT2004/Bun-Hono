import pool from "../connection"

export default class UserRepository {
    async checkUser(email: string) {
        const res = await pool.query(`SELECT * FROM users where email='${email}'`)
        if (res.rows[0]) return true
        return false
    }

    async createUser(username: string, email: string, password: string) {
        const text = `INSERT INTO users(username, email, password_hash) VALUES($1, $2, $3) RETURNING *`
        const values = [username, email, password]

        const res = await pool.query(text, values)
        return res.rows[0]
    }
}