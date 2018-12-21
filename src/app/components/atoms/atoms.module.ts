/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp 
 * @Company : rastmobile.com
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsComponent } from './atoms.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [AtomsComponent, InputComponent],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
