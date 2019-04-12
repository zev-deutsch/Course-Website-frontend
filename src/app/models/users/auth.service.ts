import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LoggedInfo} from './LoggedInfo';
import {DataService} from '../data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: LoggedInfo | boolean;

  constructor(private router: Router, private dataService: DataService) { }

  public login(userInfo: LoggedInfo) {
    this.isLoggedIn = userInfo;
  }

  public logout() {
    console.log(this.isLoggedIn);
    if (this.isLoggedIn instanceof LoggedInfo) {
      this.dataService.logout(this.isLoggedIn.accountType, this.isLoggedIn.token).subscribe();
    }
    this.isLoggedIn = false;
    this.router.navigateByUrl('../');
  }

  public loggedIn(){
    const parent = this.router.url.split('/');
    return parent[1];
  }
}
