import UserRepository from "../database/repository/user-repository"
import { hashPassword } from "../utils"


export default class UserService {
    user: UserRepository

    constructor() {
        this.user = new UserRepository()
    }

    async signUp(username: string, email: string, password: string) {
        const checkUser = await this.user.checkUser(email)
        console.log(1, checkUser)

        if (checkUser) {
            return false
        }

        try {
            const hashedPassword = await hashPassword(password)
            console.log(2, hashedPassword)
            const res = await this.user.createUser(username, email, hashedPassword)
            console.log(3, res)
            return res
        } catch(err) {
            console.log(err)
        }

    }

}