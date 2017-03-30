import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing.component';
import { AboutComponent } from './pages/about.component';

import { AddTodoComponent } from './add-todo-component/add-todo.component';
import { CounterComponent } from './counter.component';
import { TodoAddComponent } from './todo-add.component';
import { TodoListComponent } from './todo-list-component/todo-list.component';
import { NavComponent } from './nav/nav.component';


// MY OWN MODULES
import { PanelModule } from './panel/panel.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoAddComponent,
    TodoListComponent,
    AddTodoComponent,
    LandingComponent,
    AboutComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'landing', component: LandingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'todolist', component: TodoListComponent },
    ], {
      useHash: true
    }),
    PanelModule,        // <-- the custom module must be imported!!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
