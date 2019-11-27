
import { ContactActions, ContactActionTypes } from '../actions/contact.actions';
import {UsersDto} from '../models/users.dto';

export const contactFeatureKey = 'contact';

export interface State {
  isLoading: boolean,
  contacts: UsersDto;
}

export const initialState: State = {
  isLoading: false,
  contacts: []
};

export function reducer(state = initialState, action: ContactActions): State {
  switch (action.type) {

    case ContactActionTypes.LoadContacts:
      return {
        ...state,
        isLoading: true
      };

    case ContactActionTypes.LoadContactsSuccess:
      return {
        ...state,
        isLoading: false,
        contacts: action.payload.users
      };

    case ContactActionTypes.LoadContactsFailure:
      return {
        ...state,
        isLoading: false,
        contacts: []
      };

    default:
      return state;
  }
}
