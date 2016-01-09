(function() {
	'use strict';

	angular
		.module('app.todo')
		.controller('todoCtrl', todoCtrl);

	function todoCtrl(todoApi) {
		var self = this;
		self.todoList = [];
		self.todoContent = null;

		self.add = add;
		self.remove = remove;
		self.completed = completed;

		refresh();

		function refresh() {
			todoApi
				.list()
				.then(function(todoList) {
					self.todoList = todoList;
				});
		}

		function add() {
			if (!self.todoContent) return;
			todoApi
				.add(self.todoContent)
				.then(function() {
					self.todoContent = null;
					refresh();
				});
		}

		function remove(todo) {
			return todoApi
				.remove(todo)
				.then(function() {
					refresh();
				});
		}

		function completed(todo) {
			return todoApi
				.completed(todo)
				.then(function() {
					refresh();
				});
		}
	}

})();