import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ContactService} from '../services/contact.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IsTermsAndConditionAcceptedGuard implements CanActivate {
  constructor(private contactService: ContactService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.contactService.tncAccepted$.pipe(
      tap(value => {
        if (!value) {
          this.router.navigateByUrl('blad');
        }

        console.log('tncAccepted$ => tap', value);
      })
    );
  }

}
