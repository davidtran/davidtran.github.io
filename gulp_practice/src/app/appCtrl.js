(function() {

	'use strict';

	angular
		.module('app')
		.controller('appCtrl', appCtrl);

	function appCtrl($scope) {
		$scope.welcome = 'Welcome to my Angular Gulp playground';
	}

})();