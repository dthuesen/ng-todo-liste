import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo-component',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">To-Do hinzufügen</h3>
      </div>
      <div class="panel-body">
        <label for="todo-title">Titel:</label>
        <input [(ngModel)]="blogPost.title" type="text" placeholder="Bitte einen Titel eingeben" class="form-control" id="todo-title">
        <label for="todo-prio">Priorität:</label>
        <select type="text" class="form-control" id="todo-prio" [(ngModel)]="blogPost.priority">
          <option *ngFor="let priority of priorities" >{{priority}}</option>
        </select>
      </div>
      
      selected option: {{blogPost.priority}} <br />
      Entered title: {{blogPost.title}}<br /><br />
      
      <div class="panel-footer">
        <button type="button" class="btn btn-primary">
          <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
          &nbsp;To-Do hinzufügen
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./add-todo-component.component.css']
})
export class AddTodoComponentComponent {

  priorities = [ 'niedrig', 'mittel', 'hoch' ];
  blogPost: {} = {
    priority: 'niedrig',
    title: ''
  };
  
  @Output() selectedPriority = new EventEmitter<string>();

  constructor() { }


}
