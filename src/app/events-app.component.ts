import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  template: `
    <nav-bar></nav-bar>
    <router-outlet> </router-outlet>
    <img src="/assets/images/basic-shield.png" />
  `,
})
export class EventsAppComponent implements OnInit{
  constructor(private auth: AuthService){}
  
  ngOnInit(): void {
      this.auth.checkAuthenticationStatus();
  }
}
