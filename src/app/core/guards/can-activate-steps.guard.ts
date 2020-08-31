import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getSizeCart} from '../../redux';

@Injectable({
  providedIn: 'root'
})
export class CanActivateStepsGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('devo attivarlo?');
    this.store.pipe(select(getSizeCart)).subscribe(size => {
      if (!size) {
        this.router.navigateByUrl('/cart/first-step');
        return false;
      }
    });
    return true;
  }

}
