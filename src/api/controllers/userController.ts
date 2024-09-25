import { Context } from "hono";
import UserService from "../../services/user-services"

const userService = new UserService()

export const signUp = async (c: Context): Promise<any> => {
    const { username, email, password } = await c.req.json()

    try {
        const res = await userService.signUp(username, email, password)

        if (!res) return c.json('Account already existed!', 404)

        console.log('User created')
        return c.json(res, 201)
    } catch(err: any) {
        return c.json(err, 500)
    }
}