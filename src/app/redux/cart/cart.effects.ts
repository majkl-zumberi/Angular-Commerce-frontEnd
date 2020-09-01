import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpCommunicationsService} from '../../core/http-communications/http-communications.service';
import {switchMap, map, catchError, tap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {emptyCart, openModal, performPurchase} from './cart.actions';
import {selectCurrentUser, selectShoppingCartState} from '../index';
@Injectable()
// tslint:disable-next-line:class-name
export class cartEffects {

  constructor(private action$: Actions, private http: HttpCommunicationsService, private store: Store) {
  }

  performPurchase$ = createEffect(() => this.action$.pipe(
    ofType(performPurchase),
    tap(action => console.log('sto per fare acquisto')),
    withLatestFrom(this.store.pipe(select(selectCurrentUser)), this.store.pipe(select(selectShoppingCartState))),
    switchMap(([action, user, cart]) => this.postPurchase(cart.cart, user.id).pipe(
      switchMap(cartSaved => [openModal(), emptyCart()])
    ))
  ));

  postPurchase(cart: any, userId: string) {
    return this.http.retrievePostCall(`purchases/add/${userId}`, {cart});
  }
}
