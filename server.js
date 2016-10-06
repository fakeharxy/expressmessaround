var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var port       = process.env.PORT || 8080;
var mongoose   = require('mongoose');
var router     = express.Router();
var Page       = require('./models/page');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/focusd');

router.use(function(req, res, next) {
  console.log('hold on, something is going down');
  next()
});

router.get('/', function(req, res) {
  res.json({ message: 'hooray! Welcome to our api' });
});

app.use('/api', router);
app.listen(port);
console.log("listening on the best port there is: " + port);
