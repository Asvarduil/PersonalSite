import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { CurriculumVitaeRoutingModule } from './curriculum-vitae-routing.module';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';

@NgModule({
  declarations: [
    CurriculumVitaeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    CurriculumVitaeRoutingModule
  ]
})
export class CurriculumVitaeModule { }
