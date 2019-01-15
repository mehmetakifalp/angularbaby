/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MoleculesComponent } from './molecules.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations : [MoleculesComponent, TableComponent],
  imports: [
    CommonModule
  ]
})
export class MoleculesModule{

}
