var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

const makeConnection = (queryPhrase, cb) => {
  const dbConnection = mysql.createConnection({
    user: 'student',
    password: 'student',
    database: 'chat'
  });
  dbConnection.connect();
  dbConnection.query(queryPhrase, (err, results, fields) => {
    if (err) {
      throw err;
    }
    console.log('results are ', results);
    console.log('fields are ', fields);
  });
};