var LocalStrategy = require('passport-local');
module.exports = function(passport) {
  var user = {
    id: 1,
    username: 'namtran',
    email: 'nam.trankhanh.vn@gmail.com'
  };

  passport.use('signin', new LocalStrategy({passReqToCallback: true}, function(req, username, password, done) {
    if (username === 'namtran' && password === '123') {
      return done(null, user);
    }
    return done(new Error('Invalid username or password'));
  }));
}