import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  tncAccepted: Subject<boolean> = new Subject();

  constructor() { }

  accept() {
    this.tncAccepted.next(true);
  }

  cancel() {
    this.tncAccepted.next(false);
  }
}
