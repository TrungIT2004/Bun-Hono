import { Pool } from 'pg'
import processEnv from '../configs'


const pool = new Pool({
    connectionString: processEnv.PG_CONNECTION_STRING
})

export default pool