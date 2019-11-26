import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ContactModule { }
