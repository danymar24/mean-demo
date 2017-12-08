var chai     = require('chai');
var chaiHttp = require('chai-http');
var should   = chai.should();

var app      = require('../../server');

var UserController = require('../../routes/users/user-controller');
var MockedUsers    = require('./users-mockdata');

chai.use(chaiHttp);

describe('Users Routes', () => {
    describe('GET Users', () => {
        it('should respond', () => {
            chai.request(app)
                .get('/api/users')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.equal(200);
                    res.type.should.equal('application/json');
                    res.body.status.should.eql('success');
                    res.body.data.length.should.eql(2);
                    res.body.data[0].should.include.keys(
                        'id', 'name', 'email'
                    );
                    done();
                });
        });
    });
});