import {  NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [UiModule],
  declarations:[PagesComponent, LoginComponent, RegisterComponent, PaymentComponent],
  exports:[PagesComponent, LoginComponent, RegisterComponent, PaymentComponent]
})
export class PagesModule{

}