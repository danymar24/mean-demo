var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');

// Routes
var UsersRouter = require('./routes/users/user-routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/mean-demo');

var port = process.env.PORT || 3050;

var router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'welcome to our api!'});
});

app.use('/api', router);
app.use('/api/users', UsersRouter);

app.listen(port);
console.log('Api running on port ' + port);