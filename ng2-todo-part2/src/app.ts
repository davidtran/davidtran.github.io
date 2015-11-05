import {Component, bootstrap} from 'angular2/angular2';
import {TodoListComponent} from './todoList.ts';
import {TodoService} from './todoService.ts';

@Component({
  selector: 'app',
  template: `
    <h1>Todo List</h1>
    <todo-list></todo-list>
  `,
  directives: [TodoListComponent]
})
export class AppComponent {

}

bootstrap(AppComponent, [TodoService]);