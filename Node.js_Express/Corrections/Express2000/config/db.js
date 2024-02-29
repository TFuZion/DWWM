const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'formation',
    database: 'test_bdd'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la BDD:', err)
    } else {
        console.log('Connecté à la BDD MySQL')
    }
});

module.exports = connection;
