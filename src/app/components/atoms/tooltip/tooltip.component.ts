import { Component, ChangeDetectionStrategy, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: 'baby-tooltip',
  templateUrl: 'tooltip.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent{


  @Input()
  tooltipText: string = "Default Tooltip Text";

  @Input()
  tooltipSide: string = "left";

  @Input()
  tooltipClass: string = "tooltip";


}
