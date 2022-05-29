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
    // pool.end();
})

const newUser = {
    first_name: 'Anna',
    last_name: 'Happy',
    age: 42,
};
pool.query(`INSERT INTO users (first_name, last_name, age) VALUES ('${newUser.last_name}', '${newUser.first_name}', ${newUser.age});`,
(err, res) => {
    console.log(err, res);
}
)

export default pool;
