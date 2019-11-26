import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ContactFormState} from '../../models/contact-form-payload';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  previousState: Partial<ContactFormState> = {
    body: '',
    name: '',
    subject: ''
  };

  formGroup = new FormGroup({
    name: new FormControl(''),
    body: new FormControl(''),
    subject: new FormControl(''),
  });

  reset() {
    this.formGroup.reset();
  }

  saveState() {
    this.previousState = this.formGroup.value;
  }

  restoreState() {
    this.formGroup.setValue(this.previousState);
  }

  onSubmit(event) {
    console.log(this.formGroup.value);
  }
}
