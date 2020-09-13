import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export enum ThemeMode {
  DARK, LIGHT
}

@Injectable({
  providedIn: 'root'
})
export class UiStyleToggleService {
  private readonly THEME_KEY = 'THEME';
  private readonly DARK_THEME_VALUE = 'DARK';
  private readonly LIGHT_THEME_VALUE = 'LIGHT';
  private readonly DARK_THEME_CLASS_NAME = 'theme-dark';

  private darkThemeSelected = false;
  public theme$ = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);

  public setThemeOnStart() {
    if (this.isDarkThemeSelected()) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
    this.addAnimation();
  }

  public toggleTheme(): void {
    if (this.isDarkThemeSelected()) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  addAnimation(): void {
    setTimeout(() => document.body.classList.add('animate-colors-transition'), 500);
  }
  private isDarkThemeSelected(): boolean {
    this.darkThemeSelected = localStorage.getItem(this.THEME_KEY) === this.DARK_THEME_VALUE;
    return this.darkThemeSelected;
  }

  private setLightTheme() {
    localStorage.setItem(this.THEME_KEY, this.LIGHT_THEME_VALUE);
    document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
    this.darkThemeSelected = false;
    this.theme$.next(ThemeMode.LIGHT);
  }

  private setDarkTheme() {
    localStorage.setItem(this.THEME_KEY, this.DARK_THEME_VALUE);
    document.body.classList.add(this.DARK_THEME_CLASS_NAME);
    this.darkThemeSelected = true;
    this.theme$.next(ThemeMode.DARK);
  }
}
