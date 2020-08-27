import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import Glide from '@glidejs/glide';
import {Dress} from '../../../core/model/dress.interface';
@Component({
  selector: 'app-dress-preview',
  templateUrl: './dress-preview.component.html',
  styleUrls: ['./dress-preview.component.scss']
})
export class DressPreviewComponent implements OnInit, AfterViewInit {

  @Input()
  dress: Dress;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log('sono in after view init');
    const dressSelector = document.querySelector('.' + this.dress._id);
    console.log(dressSelector);
    new Glide(dressSelector).mount();
  }

}
