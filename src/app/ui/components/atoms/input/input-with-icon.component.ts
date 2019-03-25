import { Component, Input } from '@angular/core';

// component
import { InputComponent } from './input.component';

@Component({
  selector:'input-with-icon',
  templateUrl:'input-with-icon.component.html'
})
export class InputWithIconComponent extends InputComponent{


@Input()
iconName: string;



}