import { Component,Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector:'atom-button',
  templateUrl:'atom-button.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AtomsButtonComponent{

  @Input()
  buttonLabel: string = 'Default Button Label';

  @Input()
  buttonClass:string = 'btn btn-default';

  @Input()
  buttonType:string='submit';

  @Input()
  buttonDisabled:boolean=false;


}
