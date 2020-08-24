import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {loginUser, signUpUser} from '../../../redux/auth/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthFacadeService {

  constructor(private router: Router, private store: Store) { }

  signIn(email: string, password: string) {
    console.log('ora delego allo ngrx store');
    this.store.dispatch(loginUser({
      email,
      password
    }));
  }

  signUp(email: string, password: string) {
    console.log('pronto per la registrazione');
    this.store.dispatch(signUpUser({
      email,
      password
    }));
  }
}
