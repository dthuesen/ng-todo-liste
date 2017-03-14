import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <br>
      <br>
      <br>
      <!-- START MY-PANEL -->
      <my-panel>
        <my-panel-title>
          <h3 class="panel-title"><strong>To-Do</strong> Liste</h3>
        </my-panel-title>
        
        <my-panel-content>
          <ul class="list-group">
            <li
              *ngFor="let todo of todos" 
              class="list-group-item"
              [class.list-group-item-success]="todo.priority == 'gering'"
              [class.list-group-item-info]="todo.priority == 'normal'"
              [class.list-group-item-danger]="todo.priority == 'hoch'"
              [style.font-weight]="todo.priority == 'hoch' ? 'bold' : 'normal'"
              [ngStyle]="getStyles(todo)" 
            >
            {{todo.title}} ({{todo.priority}})
            </li>
          </ul>  
        </my-panel-content>
      </my-panel>
      <!-- END MY-PANEL -->
      
      <app-todo-add (onTodoAdd)="todos.push($event)"></app-todo-add>
    </div>
  `,
  styleUrls: ['./app.component.css']
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

