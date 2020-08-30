import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {removeProductToCart} from '../../../../redux/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartFacadeService {

  constructor(private store: Store) { }

  // tslint:disable-next-line:variable-name
  removeProductFromCart(_id: string) {
    this.store.dispatch(removeProductToCart({id: _id}));
  }
}
