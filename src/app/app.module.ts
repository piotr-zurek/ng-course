import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import localePLExtra from '@angular/common/locales/extra/pl';
import {SharedModule} from './shared/shared.module';
import {ContactModule} from './contact/contact.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/components/home/home.component';
import {HomeModule} from './home/home.module';

registerLocaleData(localePl, 'pl', localePLExtra);

const routes: Routes = [
  {
    path: 'contact',
    loadChildren: () => ContactModule
  },
  {
    component: HomeComponent,
    path: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ContactModule,
    HomeModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
