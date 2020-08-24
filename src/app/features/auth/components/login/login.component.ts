import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';
import {AuthFacadeService} from '../../services/auth-facade.service';
import {Store} from '@ngrx/store';
import {selectUserState} from '../../../../redux';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
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
    trigger('slide', [
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(700, style({transform: 'translateX(0)'}))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit, OnDestroy {

  loginError: string | null;
  loginForm: FormGroup;
  getState: Observable<any>;
  private sub: Subscription;

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }


  constructor(private fb: FormBuilder, private service: AuthFacadeService, private store: Store) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.getState = this.store.select(selectUserState);
  }

  ngOnInit(): void {
    this.sub = this.getState.subscribe((state) => {
      this.loginError = state.errorMessage;
    });
  }

  loginUser() {
    console.log('username:' + this.usernameControl.value);
    console.log('password:' + this.passwordControl.value);
    this.service.signIn(this.usernameControl.value, this.passwordControl.value);
  }

  ngOnDestroy(): void {
    typeof this.sub !== 'undefined' && (this.sub.unsubscribe());
  }

}
