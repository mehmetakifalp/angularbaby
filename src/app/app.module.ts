import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { UiModule } from './ui/ui.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { AppRoutingModule } from './app.routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, UiModule, PagesModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
