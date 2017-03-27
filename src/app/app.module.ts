import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';
import { CounterComponent } from './counter.component';
import { TodoAddComponent } from './todo-add.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';

// MY OWN MODULES
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoAddComponent,
    TodoListComponentComponent,
    AddTodoComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule         // <-- the custom module must be imported!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
