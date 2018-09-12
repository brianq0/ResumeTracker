var mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'root',
    password: "password",
    port: 3306,
    host: 'localhost',
    database: 'resumes_db'
})

connection.connect(err => {
    if (err) throw err;
})

module.exports = connection;