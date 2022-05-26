//hier you bring passwords to the database connector
import pg from 'pg';

const {Pool} = pg;
// env variables have to be manually injected install library dotenv
const connectionString = process.env.PG_CONNECT;

const pool = new Pool({
    connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    pool.end();
})

export default pool;
