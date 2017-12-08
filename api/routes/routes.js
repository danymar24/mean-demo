var express = require('express');
var router = express.Router();

// Routes
var UsersRouter = require('./users/user-routes');

router.use((req, res, next) => {
    console.log('A request has been made.');
    next();
});

router.use('/users', UsersRouter);

module.exports = router;