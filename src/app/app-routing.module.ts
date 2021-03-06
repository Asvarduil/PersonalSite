import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { CurriculumVitaeComponent} from '@app/curriculum-vitae/curriculum-vitae.component';
import { TechnologyComponent } from '@app/technology/technology.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cv',
    component: CurriculumVitaeComponent
  },
  {
    path: 'technology',
    component: TechnologyComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
