import { Component, OnInit } from '@angular/core';

import { AuthService } from './user/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.route.snapshot.data['pageTitle']);
  }
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {

   }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome')
    console.log('Log out');
  }
}
