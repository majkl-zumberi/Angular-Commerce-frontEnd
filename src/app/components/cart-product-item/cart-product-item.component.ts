import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent implements OnInit {

  @Input()
  product: string;

  @Input()
  productColor: string;

  @Input()
  customText: string;

  @Input()
  customColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
