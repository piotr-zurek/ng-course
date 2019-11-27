import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {UsersDto} from '../models/users.dto';
import {ContactFormState} from '../models/contact-form-payload';
import {catchError, map, withLatestFrom} from 'rxjs/operators';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  tncAccepted$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  name$: BehaviorSubject<string> = new BehaviorSubject('Jan');

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

  getUsersPhones() {
    return this.getUsers().pipe(
      withLatestFrom(this.name$),
      map(([users, name]) => {
        return users.body.map(user => user.phone + ' ' + name);
      }),
      catchError(err => {
        return throwError('błąd');
      })
    );
  }

  getCurrentUsersPhones() {
    return combineLatest(
      this.getUsers(),
      this.name$
    ).pipe(
      map(([users, name]) => {
        return users.body.map(user => user.phone + ' ' + name);
      })
    );
  }
}
