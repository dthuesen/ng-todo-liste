import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoAddComponent } from './todo-add.component'
import { CounterComponent } from './counter.component';
import { NavComponent } from './nav/nav.component';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: '../app/app.component.html',
  styleUrls: ['./app.component.css', ]
})
export class AppComponent {

  isCounterVisible = false;

  // todos = [
  //   new Todo('Angular 2 lernen', 'hoch'),
  //   new Todo('Pizza essen', 'gering')
  // ];
  // // STYLE-ZUWEISUNG IN DER KLASSE
  // getStyles(todo: Todo) {
  //   return {
  //     "font-style": (todo.priority == "gering" ? "italic" : "normal")
  //   };
  // };


}

