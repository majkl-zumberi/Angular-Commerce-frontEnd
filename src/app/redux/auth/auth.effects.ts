import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Observable, of } from 'rxjs';
import * as authActions from './auth.actions';
import {switchMap, map, tap, catchError, withLatestFrom} from 'rxjs/operators';
import { User } from 'src/app/core/model/user.interface';
import {AuthResponse} from '../../core/model/auth.interface';
import * as AuthActions from '../../redux/auth/auth.actions';
import * as jwt_decode from 'jwt-decode';
import {selectCurrentUser} from '../index';
import {select, Store} from '@ngrx/store';
import {Router} from '@angular/router';

@Injectable()
// tslint:disable-next-line:class-name
export class authEffects {
  constructor(private action$: Actions,
              private http: HttpCommunicationsService,
              private store: Store,
              private router: Router) {}

  loginUser$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.loginUser),
    switchMap(action => this.signInUser(action.email, action.password).pipe(
      // tap((response: AuthResponse) => console.log('è arrivata la response' + response)),
      catchError(err => {
        return of({
          error : err.error?.message,
          status: err.status
        } as AuthResponse);
      }),
      map((response: AuthResponse) => {
        console.log(response);
        if (!response.token) {
          return AuthActions.loginUserFailure({error: response.error});
        } else {
          return AuthActions.loginUserSuccess({token: response.token});
        }
      })
    ))

  ));

  loginUserSuccess$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.loginUserSuccess),
    // tap((action) => console.log( 'il token! user success: ' + action.token)),
    tap(action => {
      console.log('salvo utente in sessione da auth.effects');
      localStorage.setItem('token', action.token);
    }),
    map( (action) => {
      const decoded = jwt_decode(action.token) as User;
      sessionStorage.setItem('utente', JSON.stringify(decoded));
      this.router.navigateByUrl('/home');
      return authActions.initUser({ user: decoded });
    }),
  ));

  signUpUser$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.signUpUser),
    switchMap(action => this.signUpUser(action.email, action.password).pipe(
      catchError(err => {
        return of({
          error : err.error?.message,
          status: err.status
        } as AuthResponse);
      }),
      map((response: AuthResponse) => {
        if (!response.token) {
          return AuthActions.signUpUserFailure({ error: response.error});
        } else {
          return AuthActions.signUpUserSuccess({token: response.token});
        }
      })
    ))
  ));

  signUpUserSuccess$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.signUpUserSuccess),
    tap(action => {
       localStorage.setItem('token', action.token);
    }),
    map( (action) => {
      const decoded = jwt_decode(action.token) as User;
      sessionStorage.setItem('utente', JSON.stringify(decoded));
      this.router.navigateByUrl('/home');
      return authActions.initUser({ user: decoded });
    }),
  ));

  updateUser$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.editUser),
    tap(action => {
      const actualUserInfo = JSON.parse(sessionStorage.getItem('utente'));
      const updatedUser = {...actualUserInfo, ...action.user};
      console.log(actualUserInfo);
      console.log(updatedUser);
      sessionStorage.removeItem('utente');
      sessionStorage.setItem('utente', JSON.stringify(updatedUser));
    }),
    map(action => AuthActions.updateUser({user: action.user}))
  ));

  // @ts-ignore
  retrieveUserInfo$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.retrieveUserInfo),
    withLatestFrom(this.store.pipe(select(selectCurrentUser))),
    switchMap(([action, user]) => this.getUserInfo(user.id)),
    map((user: User) => AuthActions.editUser({user}))
  ));

  persistUserData$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.persistUserData),
    withLatestFrom(this.store.pipe(select(selectCurrentUser))),
    map(([action, user]) => {
      const data = {
        lastName : user.lastName,
        firstName : user.firstName,
        phone : user.phone,
        city : user.city,
        cap : user.cap,
        address : user.address,
        houseNumber : user.houseNumber,
        courier : user.courier,
        cardNumber : user.cardNumber,
        cardType : user.cardType,
        paymentMethod : user.paymentMethod,
        cvv : user.cvv,
      };
      console.log(data);
      this.persistUserDataToDB(user.id, data).subscribe();
    })
  ), {dispatch: false});

  signInUser(email: string, password: string): Observable<AuthResponse> {
    return this.http.retrievePostCall<AuthResponse>('users/signIn', {email, password});
  }

  signUpUser(email: string, password: string): Observable<AuthResponse> {
    return this.http.retrievePostCall<AuthResponse>('users/signUp', {email, password, firstName: '', lastName: ''});
  }
  getUserInfo(userId: string): Observable<User> {
    return this.http.retrieveGetCall<User>(`users/${userId}`);
  }
  persistUserDataToDB(userId: string, userData: any) {
    return this.http.retrievePatchCall(`users/${userId}`, {userData});
  }
}
