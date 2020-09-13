import { Component, OnInit } from '@angular/core';
import {UiStyleToggleService} from '../../core/services/ui-style-toggle.service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {

  constructor(private uiService: UiStyleToggleService) { }

  ngOnInit(): void {
  }
  toggleTheme() {
    this.uiService.toggleTheme();
  }
}
