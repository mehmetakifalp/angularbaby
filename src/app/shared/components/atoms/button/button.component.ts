/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: 'baby-button',
  templateUrl: 'button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {


    @Input()
    buttonType: string = 'submit';

    @Input()
    buttonClass: string = 'btn';

    @Input()
    buttonStatus: boolean = false;


    get buttonText():string{
      return  "Default Text";
    }

}
