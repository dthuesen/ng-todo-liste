
import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-add',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">To-Do hinzufügen</h3>
      </div>
      <div class="panel-body">
        <div class="form-group">
          <label>Titel:</label>
          <input type="text" class="form-control" [(ngModel)]="todo.title" placeholder="Please enter text">
        </div>
        <div class="form-group">
          <label>Priorität:</label>
          <select class="form-control" [(ngModel)]="todo.priority" name="select">
            <option>gering</option>
            <option>normal</option>
            <option>hoch</option>
          </select>
        </div>
      </div>
      <div class="panel-footer">
        <button class="btn btn-primary" (click)="onSubmitToDo()">To-Do hinzufügen</button>
      </div>
    </div>
  `
})
export class TodoAddComponent {
  todo = new Todo();
  // Adding the EventEmitter to the @Output with a generic type of "<Todo>".
  // The property "Todo" is an impirted Class with its own public properties.
  // Now this EventEmitter only acceps emitters from Type "Todo".
  @Output() onTodoAdd: EventEmitter<Todo> = new EventEmitter();

  // Shortcut of the above implementation would be:
  // -->   @Output() onTodoAdd: = new EventEmitter<Todo>();  <--

  constructor() { }

  onSubmitToDo() {
    this.onTodoAdd.emit(this.todo);
    this.todo = new Todo();
  }


}
