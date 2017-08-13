// Set up MySQL connection.
var mysql = require("mysql");
var connection; 

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'b3xedheg0xq5zztq',
    password: 'zucv0erircyg0c1c',
    database: 'burger3_db'
  });
};


connection.connect();
module.exports = connection;
