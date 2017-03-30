import { Component, Input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos = [
    new Todo('Angular 2 lernen', 'hoch'),
    new Todo('Pizza essen', 'gering')
  ];

  // STYLE-ZUWEISUNG IN DER KLASSE
  getStyles(todo: Todo) {
    return {
      "font-style": (todo.priority == "gering" ? "italic" : "normal")
    };
  };

  /**
   *  KLASSEN-ZUWEISUNG IM TEMPLATE:
   *  [ngClass]="getClassesForTodo(todo)"     <--- computed Version
   *  
   *  UND DANN IN DER KLASSE:
   *  getClassesForTodo(todo: Todo) {
   *    return {
   *      'list-group-item': true,
   *      'list-group-item-success': todo.priority == 'gering',
   *      'list-group-item-info': todo.priority == 'normal',
   *      'list-group-item-danger': todo.priority == 'hoch',
   *    };
   *  }
   */

}
