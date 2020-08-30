import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {removeProductToCart} from '../../../../redux/cart/cart.actions';
import {User} from '../../../../core/model/user.interface';
import {editUser} from '../../../../redux/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartFacadeService {

  constructor(private store: Store) { }

  // tslint:disable-next-line:variable-name
  removeProductFromCart(_id: string) {
    this.store.dispatch(removeProductToCart({id: _id}));
  }
  updadeUserInfo(user: User) {
    this.store.dispatch(editUser({user}));
  }
}
