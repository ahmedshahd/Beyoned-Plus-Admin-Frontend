import { Component } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

import { AuthService } from './shared/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Beyond Plus Admin Dashboard';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/faq', icon: 'view_list', title: 'FAQ' },
    { path: '/label', icon: 'view_list', title: 'Label' },
    {
      path: '/termsAndConditions',
      icon: 'view_list',
      title: 'Terms And Conditions',
    },
    { path: '/learnIcon', icon: 'view_list', title: 'Learn Icon' },
    { path: '/lineOfBusiness', icon: 'view_list', title: 'Line Of Business' },
    { path: '/welcomeScreen', icon: 'view_list', title: 'Welcome Screen' },
  ];

  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
