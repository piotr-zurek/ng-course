import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  isAccepted: boolean;
  private subscription: Subscription;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.subscription = this.contactService.tncAccepted.subscribe(isAccepted => {
      this.isAccepted = isAccepted;
    });
  }

  accept() {
    this.contactService.accept();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
