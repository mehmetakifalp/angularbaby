/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { Component, Input } from "@angular/core";

@Component({
  selector: 'baby-table',
  templateUrl: 'table.component.html'
})
export class TableComponent{

  @Input()
  rows = [
    {name: 'Id'},
    {name: 'Name'}
  ]

  @Input()
  columns = [
    {id: 1, name: "Mehmet"},
    {id: 2, name: "Eydi"},
    {id: 3, name: "Edip"},
    {id: 4, name: "Ekrem"},
    {id: 5, name: "Miraç"},
    {id: 6, name: "Mustafa"},
];

}
