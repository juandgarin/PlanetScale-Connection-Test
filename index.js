const { createPool } = require('mysql2/promise');
//importamos las variables de entorno con dotenv
require('dotenv').config();

async function main() {
    const conn = await createPool({
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        host: process.env.MYSQL_HOST,
        password: process.env.MYSQL_PASSWORD,
        ssl: {
            rejectUnauthorized: false
        }
    });

    const res = await conn.query("SELECT * FROM users");
    console.table(res[0]);
    console.log('connection ready')
}

main()