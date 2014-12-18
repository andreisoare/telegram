module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  var users = {
    'andreisoare': {
      id: 'andreisoare',
      name: 'Andrei Soare'
    },
    'vladberteanu': {
      id: 'vladberteanu',
      name: 'Vlad Berteanu'
    },
    'abc': {
      id: 'abc',
      name: 'Andrei ABC'
    }
  };

  usersRouter.get('/', function(req, res) {
    res.send({
      "users": Object.keys(users).map(function(id) {
        return users[id];
      })
    });
  });

  usersRouter.post('/', function(req, res) {
    console.log(req.body);
    res.send({
      "user": users[req.body.user.id]
    });
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      "user": users[req.params.id]
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      "users": {
        "id": req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
