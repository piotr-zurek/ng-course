import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  tncAccepted: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  accept() {
    this.tncAccepted.next(true);
  }

  cancel() {
    this.tncAccepted.next(false);
  }
}
