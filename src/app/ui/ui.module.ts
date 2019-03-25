import {  NgModule } from '@angular/core';

// Molecules
import { InputMoleculesComponent } from './components/molecules/input/input.molecules.component';

import { InputRememberMoleculesComponent } from './components/molecules/input/input-remember.molecules.component';


// Atoms
import { InputComponent } from './components/atoms/input/input.component';
import { InputWithIconComponent } from './components/atoms/input/input-with-icon.component';
import { InputWithCheckboxComponent } from './components/atoms/input/input-with-checkbox.component';

import { IconComponent } from './components/atoms/icon/icon.component';
import {ButtonComponent} from './components/atoms/button/button.component';

// directives
import { CreditCardDirective } from './directives/credit-card.directive';

// pipes
import { CardPipe } from './pipes/card.pipe';

@NgModule({
  imports: [],
  declarations:[CardPipe, CreditCardDirective, InputComponent, InputWithIconComponent, IconComponent, ButtonComponent, InputWithCheckboxComponent, InputMoleculesComponent, InputRememberMoleculesComponent],
  exports:[CardPipe, CreditCardDirective, InputComponent, InputWithIconComponent, IconComponent, ButtonComponent, InputWithCheckboxComponent, InputMoleculesComponent, InputRememberMoleculesComponent]
})
export class UiModule{



}