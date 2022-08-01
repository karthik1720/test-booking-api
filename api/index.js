const mysql = require('mysql')

const createTB = "create table test2 (name varchar(255), number int)";
const insertDT = "INSERT INTO test2 (name, number) VALUES ('test2', 13223)";
const selectDT = "SELECT * FROM test2";

const connection = mysql.createConnection({
  host: 'database-2.ckeqr9qxm5el.us-west-2.rds.amazonaws.com',
  port:'3306',
  user: 'admin',
  password: 'admin123',
  database:'bookingdb'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})


// connection.query(createTB, (err, result) => {
//     if (err) throw err
//     console.log('table created');
//   })
  

  connection.query(insertDT, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });

  connection.query(selectDT, function (err, result) {
    if (err) throw err;
    console.log(result);
  });



connection.end()