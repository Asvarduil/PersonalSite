import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';

@NgModule({
  declarations: [
    TechnologyComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
