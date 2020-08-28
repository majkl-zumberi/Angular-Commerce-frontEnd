import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(200, style({opacity: 0}))
      ])
    ]),
  ]
})
export class SuccessModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
