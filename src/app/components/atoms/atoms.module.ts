/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsComponent } from './atoms.component';
import { InputComponent } from './input/input.component';
import { LinkComponent } from './link/link.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [AtomsComponent, InputComponent, LinkComponent, ListItemComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class AtomsModule { }
