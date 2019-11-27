import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../../reducers';
import * as loginActions from '../../../actions/login.actions';
import {Observable} from 'rxjs';
import * as loginSelectors  from '../../../selectors/login.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn$: Observable<boolean>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isUserLoggedIn$ = this.store.select(loginSelectors.selectIsUsersLoggedIn);
    this.isLoading$ = this.store.select(loginSelectors.selectIsLoading);
  }

  onLogin() {
    this.store.dispatch(new loginActions.SubmitLoginForm({
      username: '',
      password: ''
    }));
  }
}
