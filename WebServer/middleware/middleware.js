const bodyParser = require('body-parser');
const morgan = require('morgan');

/* These are gobal middleware */
module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
}
