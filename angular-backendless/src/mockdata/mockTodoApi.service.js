(function() {
	'use strict';

	angular
		.module('app.mockdata')
		.service('mockTodoApi', mockTodoApi);

	function mockTodoApi($localStorage) {
		this.list = list;
		this.add = add;
		this.remove = remove;
		this.completed = completed;

		$localStorage['list'] = $localStorage['list'] || fakeTodoList();

		function add(todoContent) {
			var todo = makeNewTodo(todoContent);
			$localStorage['list'].push(todo);
			return true;
		}

		function list() {
			return $localStorage['list'];
		}

		function remove(todoId) {
			var todos = $localStorage['list'];
			for (var i = 0; i < todos.length; i++) {
				if (todos[i].id === todoId) {
					todos.splice(i, 1);
					return true;
				}
			}
			return false;
		}

		function completed(todoId) {
			var todos = $localStorage['list'];
			for (var i = 0; i < todos.length; i++) {
				if (todos[i].id === todoId) {
					todos[i].completed = true;
					return true;
				}
			}
			return false;
		}

		function makeNewTodo(todoContent) {
			return {
				id: $localStorage['list'].length,
				content: todoContent,
				completed: false,
				deleted: false,
				createdAt: new Date(),
				updatedAt: new Date()
			};
		}

		function fakeTodoList() {
			var result = [];
			for (var i = 0; i < 3; i++) {
				result.push({
					id: i,
					content: faker.lorem.sentence(),
					completed: faker.random.boolean(),
					deleted: faker.random.boolean(),
					createdAt: faker.date.past(),
					updatedAt: faker.date.recent()
				});
			}
			return result;
		}
	}
})();