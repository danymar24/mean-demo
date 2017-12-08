var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    console.log('A request has been made.');
    next();
});