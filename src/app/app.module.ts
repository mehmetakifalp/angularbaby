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
import { AtomsComponent } from './components/atoms/atoms.component';
import { InputComponent } from './components/atoms/input/input.component';
import { LinkComponent } from './components/atoms/link/link.component';
import { ListItemComponent } from './components/atoms/list-item/list-item.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { TooltipComponent } from './components/atoms/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    AtomsComponent,
    InputComponent, LinkComponent, ListItemComponent, ButtonComponent,TooltipComponent

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
