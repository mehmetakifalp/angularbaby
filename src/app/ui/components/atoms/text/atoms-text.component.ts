import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'atoms-text',
  templateUrl:'atoms-text.component.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class AtomsTextComponent {


  @Input()
  hSize: string = 'h1';


  @Input()
  hText: string = 'Text';


}
