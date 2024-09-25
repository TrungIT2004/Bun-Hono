import * as dotenv from 'dotenv'

const env = 'dev'

type ProcessEnv = {
    PG_CONNECTION_STRING: string;
}

if ( env === 'dev' ) {
    dotenv.config({ path: ".env.dev"})
} else {
    dotenv.config({ path: ".env.prod"})
}

const processEnv: ProcessEnv = {
    PG_CONNECTION_STRING: process.env.PG_CONNECTION_URL!
}

export default processEnv