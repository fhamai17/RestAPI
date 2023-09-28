const mysql = require('mysql2');

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movie'
});

db.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
  });
  
module.exports = db;