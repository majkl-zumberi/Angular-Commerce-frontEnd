import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getModalState, getSizeCart} from '../../redux';
import {map, withLatestFrom} from 'rxjs/operators';

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

    this.store.pipe(select(getSizeCart)).pipe(
      withLatestFrom(this.store.pipe(select(getModalState))),
      map(([sizeCart, modalOpen]) => {
        if (!sizeCart && !modalOpen) {
          console.log('carrello vuoto e modal finale chiusa ');
          this.router.navigateByUrl('/cart/first-step');
          return false;
        }
        return true;
      } )
    ).subscribe();
      /*.subscribe(size => {
      if (!size) {
        this.router.navigateByUrl('/cart/first-step');
        return false;
      }
    });*/
    return true;
  }

}
