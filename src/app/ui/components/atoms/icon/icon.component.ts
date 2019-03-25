import { Component,Input } from '@angular/core';

@Component({
  selector:'icon',
  templateUrl:'icon.component.html'
})
export class IconComponent{

  @Input()
  iconName:string='envelope';


}