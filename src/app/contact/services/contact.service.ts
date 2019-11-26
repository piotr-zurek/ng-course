import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  tncAccepted: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
  }

  accept() {
    this.tncAccepted.next(true);
  }

  cancel() {
    this.tncAccepted.next(false);
  }

  getUsers(): Observable<HttpResponse<any>> {
    return this.httpClient.get( API_ENDPOINT, { observe: 'response' });
  }
}
