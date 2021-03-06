var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var config      = require('./config');

var Routes      = require('./routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect(config.MONGODB_URL);

var port = config.PORT || 3050;

var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'welcome to our api!'});
});

app.use('/api', Routes);

app.listen(port);
console.log('Api running on port ' + port);

module.exports = app;