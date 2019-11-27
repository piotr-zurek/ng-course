import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import localePl from '@angular/common/locales/pl';
import {registerLocaleData} from '@angular/common';
import localePLExtra from '@angular/common/locales/extra/pl';
import {SharedModule} from './shared/shared.module';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/components/home/home.component';
import {HomeModule} from './home/home.module';
import {ErrorPageComponent} from './shared/components/error-page/error-page.component';

registerLocaleData(localePl, 'pl', localePLExtra);

const routes: Routes = [
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: ErrorPageComponent,
    path: '**'
  }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
