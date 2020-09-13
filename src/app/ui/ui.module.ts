import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiStyleToggleService} from '../core/services/ui-style-toggle.service';

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UiStyleToggleService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
  ]
})
export class UiModule { }
