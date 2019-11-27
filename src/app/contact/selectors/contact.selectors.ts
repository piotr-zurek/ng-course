import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromContact from '../reducers/contact.reducer';

export const selectContactState = createFeatureSelector<fromContact.State>(
  fromContact.contactFeatureKey
);

export const selectIsLoading = createSelector(selectContactState, state => state.isLoading);
export const selectContacts = createSelector(selectContactState, state => state.contacts);
