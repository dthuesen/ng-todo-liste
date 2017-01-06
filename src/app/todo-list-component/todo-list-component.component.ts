import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list-component',
  template: `
    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">To-Do Liste</h3>
      </div>
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
          <li class="list-group-item">Vestibulum at eros</li>
        </ul>
        Input: {{blogPost.title}}
    </div>
    
  `,
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent {
  
  constructor() { }


}
