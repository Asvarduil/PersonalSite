import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '@app/shared/shared.module';

import { CurriculumVitaeRoutingModule } from './curriculum-vitae-routing.module';
import { CurriculumVitaeComponent } from './curriculum-vitae.component';

@NgModule({
  declarations: [
    CurriculumVitaeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    CurriculumVitaeRoutingModule
  ]
})
export class CurriculumVitaeModule { }
