import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {retrieveAllClothes} from '../../../../redux/clothes/clothes.actions';
import {retrieveUserInfo} from '../../../../redux/auth/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(retrieveAllClothes());
    this.store.dispatch(retrieveUserInfo());
  }
}
