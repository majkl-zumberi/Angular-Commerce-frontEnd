import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
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
export class ModalComponent implements OnInit {
  @Input()
  titleError: string;
  @Input()
  messageError: string;
  @Input()
  firstLink: string;
  @Input()
  firstLinkMessage: string;
  @Input()
  secondLink: string;
  @Input()
  secondLinkMessage: string;
  @Input()
  modalColor: string;
  constructor() { }

  ngOnInit(): void {
  }

}
