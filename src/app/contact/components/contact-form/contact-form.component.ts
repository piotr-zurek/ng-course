import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  name = '';
  body = '';

  onSubmit(event) {
    console.log(event);
    console.log({
      name: this.name,
      body: this.body
    });
  }
}
