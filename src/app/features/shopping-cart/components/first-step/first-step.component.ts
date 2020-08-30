import {Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {select, Store} from '@ngrx/store';
import {getCartProducts, getCartProductsTotalPrice} from '../../../../redux';
import {Observable} from 'rxjs';
import {CartProduct} from '../../../../core/model/CartProduct.interface';
import {ShoppingCartFacadeService} from '../services/shopping-cart-facade.service';

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ]),
  ]
})
export class FirstStepComponent implements OnInit {
  get CartProducts(): Observable<CartProduct[]> {
    return this.store.pipe(select(getCartProducts));
  }

  get TotalPrice() {
    return this.store.pipe(select(getCartProductsTotalPrice));
  }

  constructor(private store: Store, private facadeService: ShoppingCartFacadeService) { }

  ngOnInit(): void {
  }

  removeProductFromCart(product: CartProduct) {
    this.facadeService.removeProductFromCart(product.prodotto._id);
  }
}
