import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, Event, RouterOutlet} from '@angular/router';
import {slider} from '../../core/animations/slider';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    slider
  ]
})
export class MenuComponent implements OnInit {

  currentRoute = '';
  constructor(private router: Router) {
    // override the route reuse strategy
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
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
}
