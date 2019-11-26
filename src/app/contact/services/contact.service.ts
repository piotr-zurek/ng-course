import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

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
