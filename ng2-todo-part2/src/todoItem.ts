import {Component, CORE_DIRECTIVES} from 'angular2/angular2';
import {TodoService} from './todoService.ts';

@Component({
  selector: 'todo-item',
  properties: ['todo'],
  directives: [CORE_DIRECTIVES],
  styles: [
    `
    .todo-item.completed{
      text-decoration: line-through;
    }
    `
  ],
  template: `
  <li [ng-class]="getTodoItemClass(todo)">
    {{todo.content}}
    -
    <a (click)="todoService.completed(todo)">Completed</a>
    -
    <a (click)="todoService.delete(todo)">Delete</a>
  </li>
  `
})
export class TodoItemComponent {
  constructor(private todoService: TodoService) {

  }

  getTodoItemClass(todo) {
    return {
      completed: todo.isCompleted === true,
      "todo-item": true
    }
  }
}