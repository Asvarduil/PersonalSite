import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from '@app/home/home.module';
import { CurriculumVitaeModule } from '@app/curriculum-vitae/curriculum-vitae.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Required modules...
    BrowserModule,
    BrowserAnimationsModule,
    // My modules...
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CurriculumVitaeModule
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
