import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumVitaeRoutingModule } from './curriculum-vitae-routing.module';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';


@NgModule({
  declarations: [CurriculumVitaeComponent],
  imports: [
    CommonModule,
    CurriculumVitaeRoutingModule
  ]
})
export class CurriculumVitaeModule { }
