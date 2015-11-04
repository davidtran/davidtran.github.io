import {Component, bootstrap} from 'angular2/angular2';
import {TodoList} from './todoList.ts';

@Component({
  selector: 'app',
  directives: [TodoList],
  template: `
    <h1>Todo App</h1>
    <todo-list></todo-list>
  `
})
class AppComponent {
  constructor() {

  }
}

bootstrap(AppComponent);

