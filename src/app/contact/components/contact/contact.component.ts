import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from '../../services/contact.service';
import {Subscription} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import {UsersDto} from '../../models/users.dto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
  isAccepted: boolean;
  users: UsersDto = [];
  hasError = false;
  isLoading = false;
  private subscription: Subscription;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.isLoading = true;
    this.contactService.getUsers()
      .subscribe(
        (res) => this.onSuccess(res),
        (err) => this.onError(err),
        () => this.onComplete()
      );

    // ==================
    this.subscription = this.contactService.tncAccepted.subscribe(isAccepted => {
      // console.log('nowa wartość', isAccepted);

      this.isAccepted = isAccepted;
    });
  }

  onSuccess(res: HttpResponse<UsersDto>) {
    this.users = res.body;
    this.hasError = false;
  }

  onError(error: any) {
    console.warn(error);
    this.hasError = true;
  }

  onComplete() {
    this.isLoading = true;
  }

  accept() {
    this.contactService.accept();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
