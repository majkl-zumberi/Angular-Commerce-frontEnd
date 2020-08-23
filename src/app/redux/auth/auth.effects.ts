import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Observable, of } from 'rxjs';
import * as authActions from './auth.actions';
import {switchMap, map, tap, catchError} from 'rxjs/operators';
import { User } from 'src/app/core/model/user.interface';
import { Router } from '@angular/router';
import {AuthResponse} from '../../core/model/auth.interface';
import * as AuthActions from '../../redux/auth/auth.actions';
@Injectable()
// tslint:disable-next-line:class-name
export class authEffects {
  constructor(private action$: Actions, private http: HttpCommunicationsService, private router: Router) {}

  loginUser$ = createEffect(() => this.action$.pipe(
    ofType(AuthActions.loginUser),
    switchMap(action => this.signInUser(action.email, action.password).pipe(
      tap((response: AuthResponse) => console.log('è arrivata la response' + response)),
      catchError(err => {
        console.log('dioccaro errore durante il login');
        console.log(err);
        return of({
          error : err.error?.message,
          status: err.status
        } as AuthResponse);
      }),
      map((response: AuthResponse) => {
        if (response.status !== 200 && response.status !== 201) {
        return AuthActions.loginUserFailure({error: response.error});
        }
      }),
    ))

  ));

  signInUser(email: string, password: string): Observable<AuthResponse> {
    return this.http.retrievePostCall<AuthResponse>('users/signIn', {email, password});
  }
}
