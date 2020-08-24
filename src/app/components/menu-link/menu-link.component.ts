import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-menu-link',
  templateUrl: './menu-link.component.html',
  styleUrls: ['./menu-link.component.scss']
})
export class MenuLinkComponent {

  @Input() menuTitle: string;
  @Input() menuLink: string;
  @Input() resize: boolean;

  constructor() { }

}
