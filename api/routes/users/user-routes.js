var express = require('express');
var router  = express.Router();

var User    = require('./user-model');

router.route('/')
    .post((req, res) => {
        var user = new User(req.body);

        user.save((err) => {
            if (err) res.send(err);

            res.json({ message: 'User creaded!' });
        });
    })
    .get((req, res) => {
        User.find((err, users) => {
            if (err) res.send(err);

            res.json(users);
        });
    });

router.route('/:id')
    .get((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.send(err);

            res.json(user);
        });
    })
    .put((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.send(err);

            user.name = req.body.name;
            user.email = req.body.email;

            user.save((err) => {
                if (err) res.send(err);

                res.json({ message: 'User updated!' });
            });
        });
    })
    .delete((req, res) => {
        User.remove({
            _id: req.params.id
        }, (err, user) => {
            if (err) res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });

module.exports = router;