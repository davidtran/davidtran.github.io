(function() {

  'use strict';

  angular
    .module('app')
    .controller('appCtrl', appCtrl);

  function appCtrl($http) {
    var _this = this;
    this.isAuthenticated = false;

    this.submit = function() {
      return $http
        .post('http://localhost:3000/signin', {
          username: _this.username,
          password: _this.password
        })
        .then(function(response) {
          _this.isAuthenticated = true;
          localStorage['token'] = response.data.token;
          alert('Login successful');
        }, function() {
          _this.isAuthenticated = false	;
          alert('Login fail');
        });
    }

    this.fetch = function() {
			var token = localStorage['token'];
      return $http
        .post('http://localhost:3000/restricted', {}, {
					headers: {
						Authorization: token
					}
				})
        .then(function() {
          alert('Fetch resource successful');
        }, function() {
          alert('Can not fetch resource');
        });
    }
  }

})();