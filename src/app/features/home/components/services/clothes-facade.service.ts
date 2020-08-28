import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {CartProduct} from '../../../../core/model/CartProduct.interface';
import {Store} from '@ngrx/store';
import {insertProductToCart} from '../../../../redux/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class ClothesFacadeService {

  constructor(private router: Router, private store: Store) { }

  // tslint:disable-next-line:variable-name
  goToDetail(_id: string, currentImage: string) {
    this.router.navigateByUrl(`/home/detail/${_id}?img=${currentImage}`);
  }

  addToCart(cart: CartProduct) {
    this.store.dispatch(insertProductToCart({cart}));
  }
}
