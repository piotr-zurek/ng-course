import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ContactActions, ContactActionTypes, LoadContactsFailure, LoadContactsSuccess} from '../actions/contact.actions';
import {ContactService} from '../services/contact.service';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ContactEffects {

  // @Effect()
  // loadContacts$ = this.actions$.pipe(
  //   ofType(ContactActionTypes.LoadContacts),
  //   concatMap(() =>
  //     /** An EMPTY observable only emits completion. Replace with your own observable API request */
  //     EMPTY.pipe(
  //       map(data => new LoadContactsSuccess({ data })),
  //       catchError(error => of(new LoadContactsFailure({ error }))))
  //   )
  // );

  @Effect()
  loadContactsFromAPI$ = this.actions$.pipe(
    ofType(ContactActionTypes.LoadContacts),
    switchMap((action) => {
      return this.contactService.getUsers().pipe(
        map(res => {
            return new LoadContactsSuccess({users: res.body});
          }
        ));
    }),
    catchError(() => {
      return of(new LoadContactsFailure({error: 1}));
    })
  );


  constructor(private actions$: Actions<ContactActions>, private contactService: ContactService, private http: HttpClient) {
  }

}
