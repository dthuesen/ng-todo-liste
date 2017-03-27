import { Component, Input } from '@angular/core';


@Component({
  selector: 'my-panel',
  template: `
    <div class="panel panel-default">
        <div class="panel-heading">
          <ng-content select="my-panel-title"></ng-content>
        </div>
        <div class="panel-body">
          <ng-content select="my-panel-content"></ng-content>
        </div>
    </div>
  `
})
export class PanelComponent {

  constructor() { }
}
