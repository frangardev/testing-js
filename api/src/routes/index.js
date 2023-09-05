const express = require('express');

const gamesRouter = require('./games.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/games', gamesRouter);
}

module.exports = routerApi;
