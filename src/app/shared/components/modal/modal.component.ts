import {Component, EventEmitter, Input, Output} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';

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
export class ModalComponent {
  @Input()
  title: string;
  @Input()
  message: string;
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
  @Output()
  closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router) { }
  closeModalRedirecting(link: string) {
    this.router.navigateByUrl(link);
    this.closeModalEvent.emit();
  }
}
