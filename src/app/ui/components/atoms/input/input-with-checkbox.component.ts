import { Component, EventEmitter, Output } from '@angular/core';

import { InputComponent } from './input.component';

@Component({
  selector:'atom-input-with-checkbox',
  templateUrl:'input-with-checkbox.component.html'
})
export class InputWithCheckboxComponent extends InputComponent{

@Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>();

checkChanged(event){
  this.checked.emit(event);
}


}