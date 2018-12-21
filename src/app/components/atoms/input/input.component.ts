/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp 
 * @Company : rastmobile.com
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'baby-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  inputType:string = "text";

  @Input()
  inputReadonly: boolean = false;

  @Input()
  inputPlaceholder: string = 'Default Placeholder';

  @Input()
  inputClass: string = 'input'

  constructor() { }

  ngOnInit() {
  }

}
