(function() {

  'use strict';

  angular
    .module('app', [])
    .config(function($httpProvider) {
      $httpProvider.interceptors.push('tokenInjector');
    });

})();