import dotenv from 'dotenv'
dotenv.config({path:'.env'});

const envObj ={
    port: process.env.PORT,
    mdburl: process.env.MDB_URL
}

export default envObj