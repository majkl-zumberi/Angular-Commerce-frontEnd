import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {trigger, style, animate, transition} from '@angular/animations';
import {Observable, Subscription} from 'rxjs';
import {AuthFacadeService} from '../../services/auth-facade.service';
import {Store} from '@ngrx/store';
import { selectUserState } from 'src/app/redux';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
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
export class SignUpComponent implements OnInit, OnDestroy {

  passwordMessage: string;
  signUpError: string | null;
  signUpForm: FormGroup;
  getState: Observable<any>;
  private sub: Subscription;

  get usernameControl(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  constructor(private fb: FormBuilder, private service: AuthFacadeService, private store: Store) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      pswGroup: this.fb.group({
        password: ['', Validators.required],
        passwordCnf: ['', Validators.required ],
      }, {
        validator: this.checkPasswords
      })
    });
    this.getState = this.store.select(selectUserState);
  }

  checkPasswords(c: AbstractControl): { [key: string]: boolean } | null {
    const emailControl = c.get('password');
    const confirmControl = c.get('passwordCnf');



    if (emailControl.pristine || confirmControl.pristine) {
      return null;
    }

    if (emailControl.value === confirmControl.value) {
      return null;
    }
    return { match: true };
  }

  signUpUser() {
    console.log('email:' + this.signUpForm.get('email').value);
    console.log('password:' + this.signUpForm.get('pswGroup').get('password').value);
    this.service.signUp(this.signUpForm.get('email').value, this.signUpForm.get('pswGroup').get('password').value);
  }

  ngOnInit(): void {
    this.sub = this.getState.subscribe((state) => {
      this.signUpError = state.errorMessage;
    });
  }
  ngOnDestroy(): void {
    typeof this.sub !== 'undefined' && (this.sub.unsubscribe());
  }
}
