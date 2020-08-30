import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ShoppingCartFacadeService} from '../services/shopping-cart-facade.service';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getCartProductsTotalPrice, getSizeCart, selectUserState} from '../../../../redux';

@Component({
  selector: 'app-third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss']
})
export class ThirdStepComponent implements OnInit {

  summaryForm: FormGroup;
  paymentType: string[] = ['Carta di credito', 'Carta prepagata'];
  cardType: string[] = ['Mastercard', 'Visa', 'American Express'];

  get sizeCart(): Observable<number> {
    return this.store.pipe(select(getSizeCart));
  }
  get userInfo() {
    return this.store.pipe(select(selectUserState));
  }
  get TotalPrice() {
    return this.store.pipe(select(getCartProductsTotalPrice));
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private facadeServer: ShoppingCartFacadeService,
    private store: Store) {
    this.summaryForm = this.fb.group({
      paymentMethod: [null, Validators.required],
      cardType: [null, Validators.required],
      cardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  saveSummary($event: any) {
    console.log(this.summaryForm.value);
  }
}
