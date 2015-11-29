var express = require('express');
var router = express.Router();
var authentication = require('../middlewares/authentication.js');
var jwt = require('jsonwebtoken');
var cors = require('cors');
module.exports = function(app, passport) {

	app.use('/', router);

	router.options('/sigin', cors());
  router.post('/signin', function(req, res, next) {
    return passport.authenticate('signin', function(err, user, info) {
      if (!user) {
        return res.status(400).send();
      }
      var token = jwt.sign({id: user.id}, 'MYSECRET', {
        expiresIn: '24h'
      });
      return res.status(200).send({
        token: token
      });
    })(req, res, next);
  });

	router.options('/restricted', cors());
  router.post('/restricted', authentication, function(req, res) {
    return res.status(200).send();
  });

}