var jwt = require('jsonwebtoken');
function authentication(req, res, next) {
  if (!req.headers['authorization']) {
    res.status(400).send();
  }
  var token = req.headers['authorization'];
  return jwt.verify(token, 'MYSECRET', function(err, result) {
    if (err) {
      return res.status(400).send();
    }
    return next();
  });
}

module.exports = authentication;