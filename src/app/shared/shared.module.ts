import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './logo/logo.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';

@NgModule({
  declarations: [
    LogoComponent,
    CollapsiblePanelComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LogoComponent,
    CollapsiblePanelComponent,
    CommonModule
  ]
})
export class SharedModule { }
