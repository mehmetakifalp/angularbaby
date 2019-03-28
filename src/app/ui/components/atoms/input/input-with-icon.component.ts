import { Component, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

// component
import { InputComponent } from './input.component';

@Component({
  selector:'input-with-icon',
  templateUrl:'input-with-icon.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class InputWithIconComponent extends InputComponent{


  @Input()
  iconClass: string = '';

  @Input()
  iconSize: number = 2;

  @Input()
  iconName: string = 'fa-envelope';

}
