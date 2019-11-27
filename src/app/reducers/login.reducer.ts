import {LoginActions, LoginActionTypes} from '../actions/login.actions';


export const loginFeatureKey = 'login';

export interface State {
  isUserLoggedIn: boolean;
  isLoading: boolean;
}

export const initialState: State = {
  isUserLoggedIn: false,
  isLoading: false
};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {
    case LoginActionTypes.SubmitLoginForm:
      return {
        ...state,
        isLoading: true
      };

    case LoginActionTypes.LoginSuccess:
      return {
        ...state,
        isLoading: false,
        isUserLoggedIn: true
      };

    case LoginActionTypes.LoginFailure:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
