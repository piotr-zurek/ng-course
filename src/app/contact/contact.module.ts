import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import {RouterModule, Routes} from '@angular/router';
import {IsTermsAndConditionAcceptedGuard} from './guards/is-terms-and-condition-accepted.guard';
import { EffectsModule } from '@ngrx/effects';
import { ContactEffects } from './effects/contact.effects';
import {StoreModule} from '@ngrx/store';
import * as fromReducers from './reducers/contact.reducer';

const routes: Routes = [
  {
    path: 'info/:id',
    component: InfoComponent,
    canActivate: [IsTermsAndConditionAcceptedGuard]
  },
  {
    path: '',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [ContactComponent, ContactFormComponent, InfoComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromReducers.contactFeatureKey, fromReducers.reducer),
    EffectsModule.forFeature([ContactEffects])
  ]
})
export class ContactModule { }
