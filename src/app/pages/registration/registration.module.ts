import { NgModule } from "@angular/core";
import { RegistrationComponent } from './registration.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    imports:[SharedModule],
    declarations: [RegistrationComponent]
})