import { Component, Input } from '@angular/core';

@Component({
  selector:'atom-input',
  templateUrl:'input.component.html'
})
export class InputComponent{

 @Input()
  inputType:string = "text";

  @Input()
  inputPlaceholder: string = 'Default Placeholder';

  @Input()
  inputClass: string = 'input'

  constructor() { }

  ngOnInit() {
  }

}