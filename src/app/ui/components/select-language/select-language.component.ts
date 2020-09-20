import { Component, OnInit } from '@angular/core';
import {UiStyleToggleService} from '../../../core/services/ui-style-toggle.service';
import {TranslateService} from '@ngx-translate/core';
import {UiLangService} from '../../../core/services/ui-lang.service';

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  lang;
  constructor(public translate: TranslateService, private uiService: UiLangService) {
  }

  changeLanguage(lang: string) {
    console.log('cambio in ', lang);
    this.uiService.changeLanguage(lang);
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') ?? 'it';
  }
}
