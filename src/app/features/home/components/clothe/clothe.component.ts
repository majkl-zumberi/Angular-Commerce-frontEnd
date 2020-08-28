import { Component, OnInit } from '@angular/core';
import {Dress} from '../../../../core/model/dress.interface';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {selectClothes} from '../../../../redux';
import {ClothesFacadeService} from '../services/clothes-facade.service';
import {retrieveAllClothes} from '../../../../redux/clothes/clothes.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clothe',
  templateUrl: './clothe.component.html',
  styleUrls: ['./clothe.component.scss']
})
export class ClotheComponent implements OnInit {

  dress: Dress;

  get clothesList(): Observable<Dress[]> {
    return this.store.pipe(select(selectClothes));
  }

  constructor(private store: Store, private clotheFacadeService: ClothesFacadeService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllClothes());
  }

  showDetail(clothe: Dress, $event: string) {
    console.log($event);
    this.clotheFacadeService.goToDetail(clothe._id, $event);
  }

}
