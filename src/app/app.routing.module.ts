import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PagesComponent
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [

    { path: '', redirectTo: 'login', canActivate: [], pathMatch: 'full' },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    
    {
        path: 'payment',
        component: PaymentComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {


}