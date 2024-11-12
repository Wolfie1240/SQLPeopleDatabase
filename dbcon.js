var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_wolfle',
  password        : 'Jesus9Saka7Odegaard8',
  database        : 'cs340_wolfle'
});
module.exports.pool = pool;
