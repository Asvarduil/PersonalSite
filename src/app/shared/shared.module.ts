import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    LogoComponent,
    CommonModule
  ]
})
export class SharedModule { }
