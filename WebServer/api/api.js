var apiRouter = require('express').Router();
var v1 = require('./v1/v1');

apiRouter.use('/v1', v1);

module.exports = apiRouter;
