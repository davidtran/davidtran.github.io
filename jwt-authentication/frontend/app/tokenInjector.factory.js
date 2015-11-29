(function() {

  'use strict';

  angular
    .module('app')
    .factory('tokenInjector', tokenInjector);

  function tokenInjector($q) {
    return {
      request: function(config) {
        if (localStorage['token']) {
          config.headers['Authorization'] = localStorage['token'];
        }
        return config;
      },

      requestError: function(rejection) {
        localStorage['token'] = null;
        return $q.reject(rejection);
      }
    }
  }

})();