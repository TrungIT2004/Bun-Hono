import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import { secureHeaders } from 'hono/secure-headers'
import pool from './database/connection'
import userRouter from './api/routes/userRoute'

const app = new Hono()

app.use(cors({
  origin: '*',
  credentials: true
}))

app.use(csrf())

app.use(secureHeaders())

// Routes
app.route('/users', userRouter)

pool.connect()
  .then( () => {
    console.log('Connected to Supabase')
  })
  .catch( (err) => {
    console.log(err)
  })

export default app
