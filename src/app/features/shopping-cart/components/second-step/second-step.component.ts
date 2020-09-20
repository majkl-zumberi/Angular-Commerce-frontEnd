import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ShoppingCartFacadeService} from '../services/shopping-cart-facade.service';
import {select, Store} from '@ngrx/store';
import {selectUserState} from '../../../../redux';
import {User} from '../../../../core/model/user.interface';
import {TranslateService} from '@ngx-translate/core';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {
  user: User;
  // from store | ngrx
  get userInfo() {
    return this.store.pipe(select(selectUserState));
  }

  userForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private facadeServer: ShoppingCartFacadeService,
    private store: Store,
    public translate: TranslateService) {
    this.userForm = this.fb.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      cap: ['', Validators.required],
      address: ['', Validators.required],
      houseNumber: ['', Validators.required],
      courier: [''],
    });
    this.userInfo.subscribe(user => {
      this.userForm.patchValue({
        firstName: user?.user?.firstName,
        lastName: user?.user?.lastName,
        phone: user?.user?.phone,
        city: user?.user?.city,
        cap: user?.user?.cap,
        address: user?.user?.address,
        houseNumber: user?.user?.houseNumber,
        courier: user?.user?.courier,
      });
      // console.log(user);
      this.user = {...user.user};
    });
  }

  ngOnInit(): void {
  }

  saveUserInfo($event: any) {
    const userVal = {
      lastName : this.user.lastName,
      firstName : this.user.firstName,
      phone : this.user.phone,
      city : this.user.city,
      cap : this.user.cap,
      address : this.user.address,
      houseNumber : this.user.houseNumber,
      courier : this.user.courier
    };
    // console.log(JSON.stringify(this.userForm.value) === JSON.stringify(userVal));
    if (JSON.stringify(this.userForm.value) !== JSON.stringify(userVal)) {
      this.facadeServer.updadeUserInfo(this.userForm.value);
    }
    combineLatest(this.translate.get('CART.STEPS.SECOND.CONTINUE'), this.translate.get('CART.STEPS.SECOND.BACK')).subscribe(
      ([continueVal, backVal]) => {
        if ($event?.submitter?.textContent === backVal || $event?.target?.attributes?.id?.nodeValue === 'previous') {
            this.router.navigateByUrl('/cart/first-step');
          } else if ($event?.submitter?.textContent === continueVal || $event?.target?.attributes?.id?.nodeValue === 'next') {
          this.router.navigateByUrl('/cart/third-step');
        }
      }
    );
  }
}
