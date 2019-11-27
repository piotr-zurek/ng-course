import {Component, HostBinding, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersDto} from '../../models/users.dto';
import {Store} from '@ngrx/store';
import {State} from '../../reducers/contact.reducer';
import * as fromContacts from '../../selectors/contact.selectors';
import * as contactsActions from '../../actions/contact.actions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isLoading$: Observable<boolean>;
  contacts$: Observable<UsersDto>;

  @HostBinding('class.foo')
  get class() {
    return true;
  }

  @HostBinding('attr.bar')
  get attr() {
    return 'a';
  }

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromContacts.selectIsLoading);
    this.contacts$ = this.store.select(fromContacts.selectContacts);

    this.store.dispatch(new contactsActions.LoadContacts());
  }
}
