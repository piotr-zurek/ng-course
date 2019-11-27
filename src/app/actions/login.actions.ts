import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  SubmitLoginForm = '[Login] Submit login form',
  LoginSuccess = '[Login] Login success',
  LoginFailure = '[Login] Login failure',
}

export class SubmitLoginForm implements Action {
  readonly type = LoginActionTypes.SubmitLoginForm;

  constructor(public payload: { username: string, password: string }) { }
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
}


export type LoginActions = SubmitLoginForm | LoginSuccess | LoginFailure;
