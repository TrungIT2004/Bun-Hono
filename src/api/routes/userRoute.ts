import { Hono } from "hono"
import { signUp } from "../controllers/userController"

const userRouter = new Hono()

userRouter.post('/', signUp)

export default userRouter