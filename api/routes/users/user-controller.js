var User = require('./user-model');

module.exports = {
    getUsers: (req, res) => {
        User.find((err, users) => {
            if (err) res.send(err);

            res.json(users);
        });
    },
    getUser: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.send(err);

            res.json(user);
        });
    },
    createUser: (req, res) => {
        var user = new User(req.body);

        user.save((err) => {
            if (err) res.send(err);

            res.json({ message: 'User creaded!' });
        });
    },
    updateUser: (req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) res.send(err);

            user.name = req.body.name;
            user.email = req.body.email;

            user.save((err) => {
                if (err) res.send(err);

                res.json({ message: 'User updated!' });
            });
        });
    },
    deleteUser: (req, res) => {
        User.remove({
            _id: req.params.id
        }, (err, user) => {
            if (err) res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    }
};