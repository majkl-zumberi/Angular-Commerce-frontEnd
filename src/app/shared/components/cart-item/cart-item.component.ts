import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartProduct} from '../../../core/model/CartProduct.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartProduct: CartProduct;

  @Output()
  deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.deleteEvent.emit();
  }
}
