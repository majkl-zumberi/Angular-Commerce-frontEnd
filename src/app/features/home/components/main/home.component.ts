import { Component, OnInit } from '@angular/core';
import {DressImageLink} from '../../../../core/model/dressImageLink.interface';
import {Dress} from '../../../../core/model/dress.interface';
import {Store, select} from '@ngrx/store';
import {retrieveAllClothes} from '../../../../redux/clothes/clothes.actions';
import { selectClothes } from 'src/app/redux';
import { Observable } from 'rxjs';
import {ClothesFacadeService} from '../services/clothes-facade.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dress: Dress;
  links: DressImageLink[];

  get clothesList(): Observable<Dress[]> {
    return this.store.pipe(select(selectClothes));
  }

  constructor(private store: Store, private clotheFacadeService: ClothesFacadeService) {
  }

  ngOnInit(): void {
    this.store.dispatch(retrieveAllClothes());
  }

  showDetail(clothe: Dress) {
    this.clotheFacadeService.goToDetail(clothe._id);
  }
}
