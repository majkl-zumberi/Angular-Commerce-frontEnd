import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UiLangService {
  constructor(public translate: TranslateService) {
    this.translate.addLangs(['it', 'en', 'fr']);
    this.translate.setDefaultLang(this.islangSelected());
    // const browserLang = translate.getBrowserLang();
    translate.use(UiLangService.islangSelected());
  }
  private static islangSelected(): string {
    const lang = localStorage.getItem('lang') ?? 'it';
    console.log('utilizzo ', lang);
    return lang;
  }


  public setLangOnStart() {
    this.translate.use(UiLangService.islangSelected());
  }
  changeLanguage(lang: string) {
  this.translate.use(lang);
  localStorage.setItem('lang', lang);
  }
}
