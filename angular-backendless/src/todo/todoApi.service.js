(function() {
	'use strict';

	angular
		.module('app.todo')
		.service('todoApi', todoApi);

	function todoApi($q, $http) {
		this.add = add;
		this.list = list;
		this.remove = remove;
		this.completed = completed;

		function add(todo) {
			return $http.post('/todo', todo);
		}

		function list() {
			return $q(function(resolve, reject) {
				return $http
					.get('/todo')
					.then(function(response) {
						return resolve(response.data);
					});
			});
		}

		function remove(todo) {
			return $http.delete('/todo/' + todo.id);
		}

		function completed(todo) {
			return $http.patch('/todo/' + todo.id + '/completed');
		}
	}

})();