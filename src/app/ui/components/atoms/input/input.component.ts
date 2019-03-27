import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector:'atom-input',
  templateUrl:'input.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InputComponent{

 @Input()
  inputType:string = "text";

  @Input()
  inputPlaceholder: string = 'Default Placeholder';

  @Input()
  inputClass: string = 'input'


}
