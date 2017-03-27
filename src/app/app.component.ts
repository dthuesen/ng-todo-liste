import { Component } from '@angular/core';
import { Todo } from './todo';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['./app.component.css',]  
})
export class AppComponent {

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

