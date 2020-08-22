import { Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {trigger, style, animate, transition} from '@angular/animations';

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
export class SignUpComponent {

  passwordMessage: string;
  signUpForm: FormGroup;
  get usernameControl(): FormControl {
    return this.signUpForm.get('email') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      pswGroup: this.fb.group({
        password: ['', Validators.required],
        passwordCnf: ['', Validators.required],
      }, {
        validator: this.checkPasswords
      })
    });
  }
  registerUser() {
    console.log('email:' + this.signUpForm.get('email').value);
    console.log('password:' + this.signUpForm.get('pswGroup').get('password').value);
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
  }
}
