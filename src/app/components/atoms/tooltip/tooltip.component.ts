import { Component, ChangeDetectionStrategy, ViewEncapsulation } from "@angular/core";

@Component({
  selector: 'baby-tooltip',
  templateUrl: 'tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent{

}
