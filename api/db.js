var mysql = require("mysql2");

var connection = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "pass",
  database: "professors",
});
connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected..!");
  }
});
module.exports = connection;