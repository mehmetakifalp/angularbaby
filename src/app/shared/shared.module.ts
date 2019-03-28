import { NgModule } from "@angular/core";
import { AtomsComponent } from './components/atoms/atoms.component';
import { AtomsInputComponent } from './components/atoms/input/atoms-input.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { ListItemComponent } from './components/atoms/list-item/list-item.component';
import { RegistrationComponent } from '../pages/registration/registration.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TooltipComponent } from './components/atoms/tooltip/tooltip.component';

@NgModule({
    imports:[AtomsComponent,
      AtomsInputComponent, LinkComponent, ListItemComponent, ButtonComponent,TooltipComponent],
    exports:[AtomsComponent,
      AtomsInputComponent, LinkComponent, ListItemComponent, ButtonComponent,TooltipComponent],
    declarations: [RegistrationComponent]
})
export class SharedModule{

}
