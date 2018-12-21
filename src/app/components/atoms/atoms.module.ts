/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp 
 * @Company : rastmobile.com
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsComponent } from './atoms.component';
import { InputComponent } from './input/input.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [AtomsComponent, InputComponent, LinkComponent],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
