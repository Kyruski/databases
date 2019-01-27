var db = require('../db');

module.exports = {
  messages: {
    get: function (res, callback) {
      db.query('SELECT messages.id, messages.text, messages.room, users.username FROM messages JOIN users ON users.id = messages.username', (err, results, fields) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (body, res, callback) {
      db.query('SELECT id FROM users WHERE username = ?', [body.username], (err, userIdResults, fields) => {
        db.query('INSERT INTO messages (text, room, username) VALUES(?, ?, ?)', [body.message, body.roomname, userIdResults[0].id], (err, results, fields) => {
          if (err) {
            callback(err);
          } else {
            callback(null, results);
          }
        });

      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (res, callback) {
      db.query('SELECT * FROM users', (err, results, fields) => {
        if (err) {
          callback(err);
        } else {
          callback(null, results);
        }
      });
    },

    post: function (body, res, callback) {
      db.query('SELECT username FROM users WHERE username = ?', [body.username], (err, results) => {
        if (err) {
          callback(err);
        } else {
          if (results.length === 0) {
            db.query('INSERT INTO users (username) VALUES (?)', [body.username], (err, results, fields) => {
              if (err) {
                callback(err);
              } else {
                console.log('Created user: ', body.username);
                callback(null, results);
              }
            });
          } else {
            console.log('User already exists');
            callback(null);
          }
        }
      });
    }
  }
};

