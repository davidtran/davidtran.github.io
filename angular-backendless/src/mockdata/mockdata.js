(function() {
	'use strict';

	angular
		.module('app.mockdata', [
			'ngMockE2E',
			'ngStorage'
		])
		.run(run);

	function run($httpBackend, mockTodoApi) {
		$httpBackend.whenGET('/todo').respond(mockTodoApi.list());
		$httpBackend.whenPOST('/todo').respond(function(method, url, data) {
			return [200, mockTodoApi.add(data), {}];
		});
		$httpBackend.whenDELETE(/\/todo\/\d+/).respond(function(method, url, data) {
			var id = extractNumberFromUrl(url);
			return [200, mockTodoApi.remove(id), {}];
		});
		$httpBackend.whenPATCH(/\/todo\/\d+\/completed/).respond(function(method, url, data) {
			var id = extractNumberFromUrl(url);
			console.log(url, id);
			return [200, mockTodoApi.completed(id), {}];
		});

		function extractNumberFromUrl(url) {
			var regex = /(\d+)/;
			var match = regex.exec(url);
			if (match !== null) return parseInt(match[1]);
			return null;
		}
	}

})();