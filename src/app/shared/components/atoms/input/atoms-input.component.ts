/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { Component,  Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'baby-input',
  templateUrl: './atoms-input.component.html',
  styleUrls: ['./atoms-input.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AtomsInputComponent  {

  @Input()
  inputType:string = "text";

  @Input()
  inputPlaceholder: string = 'Default Placeholder';

  @Input()
  inputClass: string = 'input';

  @Input()
  inputName: string = 'name';

  @Input()
  inputReadonly: boolean = false;

  @Input()
  inputDisabled: boolean = false;




}
