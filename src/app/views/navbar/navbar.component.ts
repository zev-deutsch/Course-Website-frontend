import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../models/users/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loggedIn: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
    console.log(this.loggedIn);
  }

  logout() {
    this.authService.logout();
    // this.router.navigateByUrl('/login'); // TODO change
  }
}
