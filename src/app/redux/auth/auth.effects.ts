import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpCommunicationsService } from '../../core/http-communications/http-communications.service';
import { Observable, of } from 'rxjs';
import * as authActions from './auth.actions';
import { switchMap, map, tap} from 'rxjs/operators';
import { User } from 'src/app/core/model/user.interface';
import { Router } from '@angular/router';
@Injectable()
// tslint:disable-next-line:class-name
export class authEffects {
  constructor(private action$: Actions, private http: HttpCommunicationsService, private router: Router) {}
}
