import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import localePLExtra from '@angular/common/locales/extra/pl';
import {SharedModule} from './shared/shared.module';
import {ContactModule} from './contact/contact.module';

registerLocaleData(localePl, 'pl', localePLExtra);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
