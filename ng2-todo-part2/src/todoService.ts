export class TodoService {
  private _todos;

  constructor() {
    this._todos = todos;
  }

  getTodos() {
    return this._todos;
  }

  completed(todo) {
    todo.isCompleted = todo.isCompleted ? false : true;
  }

  delete(todo) {
    var index = this._todos.indexOf(todo);
    this._todos.splice(index, 1);
  }

  add(content: string) {
    var todo = {
      content: content,
      createdAt: new Date(),
      isCompleted: false
    }
    this._todos.push(todo);
  }
}

var todos = [
  {
    content: 'Write Angular 2 Blog',
    createdAt: new Date(),
    isCompleted: false
  },
  {
    content: 'Finish Todo demo',
    createdAt: new Date(),
    isCompleted: false
  },
  {
    content: 'Push source code to Github',
    createdAt: new Date(),
    isCompleted: true
  }
]