import { Injectable } from '@angular/core';
import {User} from './user';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private router: Router) { }

  public login(userInfo: User) {
    localStorage.setItem('ACCESS_TOKEN', 'access_token');
  }

  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }

  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public loggedIn(){
    const parent = this.router.url.split('/');
    return parent[1];
  }
}
