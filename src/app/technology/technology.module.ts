import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    TechnologyComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
