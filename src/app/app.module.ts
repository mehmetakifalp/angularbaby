/*
 * @Author: mehmetakifalp@gmail.com - mehmet akif alp
 * @Company : rastmobile.com
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from './components/atoms/atoms.module';
import { MoleculesModule } from './components/molecules/molecules.module';
import { OrganismsModule } from './components/organisms/organisms.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
