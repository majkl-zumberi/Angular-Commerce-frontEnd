import { Component, OnInit } from '@angular/core';
import Glide from '@glidejs/glide';
import {DressImageLink} from '../../../../core/model/dressImageLink.interface';
import {Dress} from '../../../../core/model/dress.interface';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dress: Dress;
  links: DressImageLink[];
  constructor() {
  }

  ngOnInit(): void {
    this.links = [
      {
        _id: 'sas',
        link: 'https://images.unsplash.com/photo-1575436611232-44651b483d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1243&q=80'
      },
      {
        _id: 'dod',
        link: 'https://images.unsplash.com/photo-1550505364-441e12acc1dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
      },
      {
        _id: 'lol',
        link: 'https://images.unsplash.com/photo-1589905803031-9128fd807bbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80'
      }
    ];
    this.dress = {
      _id: 'sooos',
      name: 'wella',
      price: 7.99,
      links: this.links
    };
    const carousels = document.querySelectorAll('.glide');
    carousels.forEach(carousel => {
      new Glide(carousel).mount();
    });
  }

}
