const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bibliotecaadmin'
});

connection.connect((err) => {
    if (err) {
        console.log('Error conectando a la base de datos:', err);
        return;
    } else {
        console.log('Conexión exitosa a MYSQL');
    }
});

module.exports = connection;
