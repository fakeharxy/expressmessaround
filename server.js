var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var port       = process.env.PORT || 8080;
var mongoose   = require('mongoose');
var router     = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/focusd');

router.get('/', function(req, res) {
  res.json({ message: 'hooray! Welcome to our api' });
});

app.use('/api', router);
app.listen(port);
