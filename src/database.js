import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'mybase.mysql.database.azure.com',
    port: '3306',
    user: 'Novato',
    password: 'Rizzo64$',
    database: 'Prueba01'
});

export default pool;