import { Component } from '@angular/core';

@Component({
  selector:'input-remember-molecules',
  templateUrl:'input-remember.molecules.component.html'
})
export class InputRememberMoleculesComponent{

  logMeIn($event){
    alert($event);
  }
}