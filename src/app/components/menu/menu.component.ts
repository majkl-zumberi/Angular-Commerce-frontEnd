import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, Event, RouterOutlet} from '@angular/router';
import {slider} from '../../core/animations/slider';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {getSizeCart} from '../../redux';
import {map} from 'rxjs/operators';
import {UiStyleToggleService} from '../../core/services/ui-style-toggle.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    slider
  ]
})
export class MenuComponent implements OnInit {
  get sizeCart(): Observable<string> {
    return this.store.pipe(select(getSizeCart)).pipe(
      map(cart => `${cart}`)
    );
  }
  currentRoute = '';
  constructor(private router: Router, private store: Store, private uiService: UiStyleToggleService) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
    };
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        this.currentRoute = event.url;
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit(): void {
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  toggleTheme() {
    this.uiService.toggleTheme();
  }

}
