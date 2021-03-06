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
import {HttpClientModule} from '@angular/common/http';
import {MyGuardGuard} from './guards/my-guard.guard';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

registerLocaleData(localePl, 'pl', localePLExtra);

const routes: Routes = [
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule),
    // canLoad: [MyGuardGuard]
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
    HttpClientModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      preloadingStrategy: PreloadAllModules
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
