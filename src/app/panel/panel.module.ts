import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PanelComponent } from './panel.component';
import { PanelContentComponent } from './panel-content.component';
import { PanelTitleComponent } from './panel-title.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    PanelComponent,
    PanelContentComponent,
    PanelTitleComponent,
  ],
  exports: [                //<--- only exports are visible outside this module
    PanelComponent,
    PanelContentComponent,
    PanelTitleComponent,
  ]
})
export class PanelModule {
}
