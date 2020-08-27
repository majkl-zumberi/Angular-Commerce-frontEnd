import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {HttpCommunicationsService} from '../../core/http-communications/http-communications.service';
import * as ClothesActions from './clothes.actions';
import {switchMap, map, catchError, tap} from 'rxjs/operators';
import {Dress} from '../../core/model/dress.interface';
import {of} from 'rxjs';
import { retrieveAllClothes } from './clothes.actions';
@Injectable()
// tslint:disable-next-line:class-name
export class clothesEffects {

  constructor(private action$: Actions, private http: HttpCommunicationsService) {
  }

  retrieveAllClothes$ = createEffect(() => this.action$.pipe(
    ofType(retrieveAllClothes),
    switchMap(action => this.http.retrieveGetCall<Dress[]>('clothes/all').pipe(
      tap(clothes => console.log(clothes)),
      catchError(err => {
        // qui puoi fare un dispatch di un azione per gestire ulteriormente l'errore
        return of([]) ;
      }),
      map((clothes) => ClothesActions.initClothes({clothes}))
    ))
  ));
}
