import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LoggedInfo} from './LoggedInfo';
import {User} from "./user";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: LoggedInfo;
  baseUrl = 'http://localhost/backend/';
  headers = new HttpHeaders({
    'content-Type': 'application/x-www-form-urlencoded',
    Authorization: (this.isLoggedIn ? this.isLoggedIn.token : '')
  });

  constructor(private http: HttpClient, private router: Router) { }

  // Makes connection to db and returns users info onsuccess or error
  public login(args: User): Observable<LoggedInfo> {
    const params = `id=${args.id}&password=${args.password}&accountType=${args.accountType}`;
    return this.http.post<LoggedInfo>(this.baseUrl + 'initials/login', params, {headers: this.headers});
  }

  public loggedIn(userInfo: LoggedInfo) {
    this.isLoggedIn = userInfo;
  }

  public logout() {
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      return this.http.post<any>(this.baseUrl + 'initials/logout', {headers: this.headers});
    }
    this.isLoggedIn = null;
  }

  public loggedInOld(){
    const parent = this.router.url.split('/');
    return parent[1];
  }
}
