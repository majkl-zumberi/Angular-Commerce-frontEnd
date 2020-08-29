import { Component, OnInit } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getCartProducts, getSizeCart} from '../../redux';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartProduct} from '../../core/model/CartProduct.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  get sizeCart(): Observable<string> {
    return this.store.pipe(select(getSizeCart)).pipe(
      map(cart => `Carrello (${cart})`)
    );
  }
  get cartProducts(): Observable<CartProduct[]> {
    return  this.store.pipe(select(getCartProducts));
  }
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.cartProducts.subscribe(products => console.log(products));
  }

}
