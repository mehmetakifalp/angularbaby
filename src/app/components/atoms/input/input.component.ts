import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'baby-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Input()
  inputType:string = "text";Ü

  @Input()
  readonly: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
