const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the leaderes to you!');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the leader: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end('Deleting all leader');
  });

leaderRouter
  .route('/:id')
  .get((req, res, next) => {
    const id = req.params.id;
    res.end('Get leader ' + id);
  })
  .post((req, res, next) => {
    res.end(
      'Post not supported'
    );
  })
  .put((req, res, next) => {
    res.end(
      'Updated the leader: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    const id = req.params.id;
    res.end('Deleted leader ' + id);
  });

module.exports = leaderRouter;
