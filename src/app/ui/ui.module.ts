import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiStyleToggleService} from '../core/services/ui-style-toggle.service';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import {ThemeTogglerComponent} from './components/theme-toggler/theme-toggler.component';
import { DropDownSettingsComponent } from './components/drop-down-settings/drop-down-settings.component';
import {UiLangService} from '../core/services/ui-lang.service';
import {TranslateModule} from '@ngx-translate/core';

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}
export function langFactory(themeService: UiLangService) {
  return () => themeService.setLangOnStart();
}

@NgModule({
  declarations: [SelectLanguageComponent, ThemeTogglerComponent, DropDownSettingsComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [
    UiStyleToggleService,
    UiLangService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
    {provide: APP_INITIALIZER, useFactory: langFactory, deps: [UiLangService], multi: true},
  ],
  exports: [SelectLanguageComponent, ThemeTogglerComponent, DropDownSettingsComponent]
})
export class UiModule { }
