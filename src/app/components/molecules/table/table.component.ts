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
  data = [{
    id: 1, name: "Mehmet"
  }];

}
