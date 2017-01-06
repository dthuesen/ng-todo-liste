import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';
import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponentComponent,
    AddTodoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
