import { Component,Input } from '@angular/core';

@Component({
  selector:'atom-button',
  templateUrl:'button.component.html'
})
export class ButtonComponent{

  @Input()
  buttonLabel: string = 'Default Button Label';

  @Input()
  buttonClass:string = 'btn btn-default';

  @Input()
  buttonType:string='submit';

  @Input()
  buttonDisabled:boolean=false;



}