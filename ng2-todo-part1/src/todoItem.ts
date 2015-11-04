import {Component} from 'angular2/angular2';

@Component({
  selector: 'todo-item',
  properties: ['todo'],
  template: `
    <li class="todo-item">
      {{todo.content}}
    </li>
  `
})
export class TodoItem {

}