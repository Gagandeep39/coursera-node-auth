const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send all the promos to you!');
  })
  .post((req, res, next) => {
    res.end(
      'Will add the Promo: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
  })
  .delete((req, res, next) => {
    res.end('Deleting all Promo');
  });

promoRouter
  .route('/:id')
  .get((req, res, next) => {
    const id = req.params.id;
    res.end('Get Promo ' + id);
  })
  .post((req, res, next) => {
    res.end(
      'Post not supported'
    );
  })
  .put((req, res, next) => {
    res.end(
      'Updated the Promo: ' +
        req.body.name +
        ' with details: ' +
        req.body.description
    );
  })
  .delete((req, res, next) => {
    const id = req.params.id;
    res.end('Deleted Promo ' + id);
  });

module.exports = promoRouter;
