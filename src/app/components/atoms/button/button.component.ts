import { Component, Input } from "@angular/core";

@Component({
  selector: 'baby-button',
  templateUrl: 'button.component.html'
})
export class ButtonComponent {


    @Input()
    buttonType: string = 'btn'
}
