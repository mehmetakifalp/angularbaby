/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtomsComponent } from './components/atoms/atoms.component';

const routes: Routes = [
  {
    path: 'atoms',
    component: AtomsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
