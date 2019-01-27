var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res, (err, results) => {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, res, (err, results) => {
        res.statusCode = 201;
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(res, (err, results) => {
        res.statusCode = 200;
        res.end(JSON.stringify(results));
      });
    },
    post: function (req, res) {
      models.users.post(req.body, res, (err, results) => {
        res.statusCode = 201;
        res.end();
      });
    }
  }
};

