const mysql = require('mysql');

const connMySQL = () => {
  return connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fseletro'
  });
}
module.exports = () => {
  return connMySQL;
}