import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AddTodoComponentComponent } from './add-todo-component/add-todo-component.component';
import { PanelComponent } from './panel.component';
import { PanelContentComponent } from './panel-content.component';
import { PanelTitleComponent } from './panel-title.component';
import { TodoAddComponent } from './todo-add.component';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponentComponent,
    AddTodoComponentComponent,
    PanelComponent,
    PanelContentComponent,
    PanelTitleComponent
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
