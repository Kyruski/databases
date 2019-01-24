var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      //query database
      //create response body (invoke models) (callback to response end?);
      //set status code
      //response.end
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let body = '';
      request.on('data', chunk => {
        body += chunk;
      });
      request.on('end', () => {
        models.messages.post(body, res, (dbConnection) => {
          dbConnection.query();
          res.statusCode = 201;
          res.end();
        });
      });
      //response.on data, make body
      //add body {message, room, and user} to table as new row  (invoke models)
      //response.on end invoke end()
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //query database
      //create response body  (invoke models)
      //set status code
      //response.end
    },
    post: function (req, res) {
      //response.on data, make body
      //add body {user} to table as new row  (invoke models)
      //response.on end invoke end()
    }
  }
};

