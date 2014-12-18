module.exports = function(app) {
  var express = require('express');
  var postsRouter = express.Router();

  var posts = {
    "p1": {
      id: "p1",
      author: "andreisoare",
      body: "post 1 body"
    },
    "p2": {
      id: "p2",
      author: "vladberteanu",
      body: "post 2 body"
    }
  };

  postsRouter.get('/', function(req, res) {
    res.send({
      "posts": Object.keys(posts).map(function(id) {
        return posts[id];
      })
    });
  });

  postsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  postsRouter.get('/:id', function(req, res) {
    res.send({
      "posts": {
        "id": req.params.id
      }
    });
  });

  postsRouter.put('/:id', function(req, res) {
    res.send({
      "posts": {
        "id": req.params.id
      }
    });
  });

  postsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/posts', postsRouter);
};
