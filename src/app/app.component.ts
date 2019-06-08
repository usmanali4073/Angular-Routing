import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError
} from '@angular/router';

import { AuthService } from './user/auth.service';
import { slideInAnimation } from './app.animation';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading: boolean;
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }
  checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
        this.loading = true;
    }
    if ( routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationEnd ) {
      this.loading = false;
    }
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
  }
}
