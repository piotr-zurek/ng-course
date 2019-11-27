import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Observable, Subscription} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {UsersDto} from '../../models/users.dto';
import {ContactFormState} from '../../models/contact-form-payload';
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

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromContacts.selectIsLoading);
    this.contacts$ = this.store.select(fromContacts.selectContacts);

    this.store.dispatch(new contactsActions.LoadContacts());
  }
}
