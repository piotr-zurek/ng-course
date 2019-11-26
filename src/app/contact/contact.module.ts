import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [ContactComponent],
  exports: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ]
})
export class ContactModule { }
