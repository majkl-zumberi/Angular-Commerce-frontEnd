import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';
import {AuthFacadeService} from '../../services/auth-facade.service';

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
export class LoginComponent implements OnInit {

  loginError: string | null;
  loginForm: FormGroup;
  getState: Observable<any>;

  get usernameControl(): FormControl {
    return this.loginForm.get('username') as FormControl;
  }
  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }


  constructor(private fb: FormBuilder, private service: AuthFacadeService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  loginUser() {
    console.log('username:' + this.usernameControl.value);
    console.log('password:' + this.passwordControl.value);
    this.service.signIn(this.usernameControl.value, this.passwordControl.value);
  }
}
