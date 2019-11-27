import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from './../reducers/login.reducer';
import {State} from '../reducers';

const selectLoginState = createFeatureSelector<State, fromLogin.State>(fromLogin.loginFeatureKey);

export const selectIsLoading = createSelector(selectLoginState, state => state.isLoading);
export const selectIsUsersLoggedIn = createSelector(selectLoginState, state => state.isUserLoggedIn);
