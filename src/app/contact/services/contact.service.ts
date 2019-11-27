import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {UsersDto} from '../models/users.dto';
import {ContactFormState} from '../models/contact-form-payload';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  tncAccepted$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient) {
  }

  accept() {
    this.tncAccepted$.next(true);
  }

  cancel() {
    this.tncAccepted$.next(false);
  }

  getUsers(): Observable<HttpResponse<UsersDto>> {
    return this.httpClient.get<UsersDto>( API_ENDPOINT, { observe: 'response' });
  }

  send(body: ContactFormState) {
    return this.httpClient.post('http://google.com', body);
  }
}
