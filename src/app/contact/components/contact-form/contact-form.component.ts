import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
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
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5)]
    ),
    body: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required, isNIP()]),
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

  isFormValid() {
   return this.formGroup.valid;
  }

  isControlInvalid(controlName: string) {
    const control = this.formGroup.get(controlName);
    return this.shouldDisplayError(control);
  }

  shouldDisplayError(control: AbstractControl) {
    return control.touched && control.invalid;
  }

  getSubjectErrorLabel() {
    if (this.formGroup.get('subject').errors.required) {
      return 'To pole jest wymagane';
    }

    if (this.formGroup.get('subject').errors.isNip) {
      return 'To nie jest NIP';
    }
  }

}

function isNIP(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isValid = control.value && control.value.length === 10;

    return isValid ? null : { isNip: true };
  };
}
