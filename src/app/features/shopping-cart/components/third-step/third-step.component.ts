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
  get cardNumber() {
    return this.summaryForm.get('cardNumber');
  }
  get cvv() {
    return this.summaryForm.get('cvv');
  }
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private facadeServer: ShoppingCartFacadeService,
    private store: Store) {
    this.summaryForm = this.fb.group({
      paymentMethod: [null, Validators.required],
      cardType: [null, Validators.required],
      cardNumber: ['', { validators: [Validators.required, Validators.minLength(13), Validators.pattern('^[0-9]*$'), Validators.maxLength(16)], updateOn: 'blur' }],
      cvv: ['', { validators: [Validators.required, Validators.minLength(3), Validators.pattern('^[0-9]*$'), Validators.maxLength(3)], updateOn: 'blur' }],
    });
  }

  ngOnInit(): void {
  }

  saveSummary($event: any) {
    console.log(this.summaryForm.value);
  }
  public focusIn(target): void {
    target.parentElement.classList.add('e-input-focus');
    console.log(target);
  }

  public focusOut(target): void {
     target.parentElement.classList.remove('e-input-focus');
  }
}
