import { Injectable } from '@angular/core';
import {User} from './user';
import {Router} from '@angular/router';
import {LoggedInfo} from "./LoggedInfo";
import {DataService} from "../data.service";

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
      this.dataService.logout(this.isLoggedIn.accountType);
    }
    this.isLoggedIn = false;
    this.router.navigateByUrl('../');
  }

  // public login(userInfo: User) {
  //   localStorage.setItem('ACCESS_TOKEN', 'access_token');
  // }

  // public isLoggedIn() {
  //   return localStorage.getItem('ACCESS_TOKEN') !== null;
  //
  // }

  // public logout() {
  //   localStorage.removeItem('ACCESS_TOKEN');
  // }

  public loggedIn(){
    const parent = this.router.url.split('/');
    return parent[1];
  }
}
