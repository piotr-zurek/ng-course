import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoComponent } from './components/info/info.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'info/:id',
    component: InfoComponent
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
    RouterModule.forChild(routes)
  ]
})
export class ContactModule { }
