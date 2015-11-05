import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from './todoService.ts';
import {TodoItemComponent} from './todoItem.ts';

@Component({
  selector: 'todo-list',
  template: `
    <ul>
      <todo-item *ng-for="#todo of todoService.getTodos()"
                 [todo]="todo">
      </todo-item>
    </ul>
  `,
  directives: [CORE_DIRECTIVES, TodoItemComponent]
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {

  }
}
