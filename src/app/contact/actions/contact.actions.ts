import { Action } from '@ngrx/store';
import {UsersDto} from '../models/users.dto';

export enum ContactActionTypes {
  LoadContacts = '[Contact] Load Contacts',
  LoadContactsSuccess = '[Contact] Load Contacts Success',
  LoadContactsFailure = '[Contact] Load Contacts Failure',
}

export class LoadContacts implements Action {
  readonly type = ContactActionTypes.LoadContacts;
}

export class LoadContactsSuccess implements Action {
  readonly type = ContactActionTypes.LoadContactsSuccess;
  constructor(public payload: { users: UsersDto }) { }
}

export class LoadContactsFailure implements Action {
  readonly type = ContactActionTypes.LoadContactsFailure;
  constructor(public payload: { error: any }) { }
}

export type ContactActions = LoadContacts | LoadContactsSuccess | LoadContactsFailure;

