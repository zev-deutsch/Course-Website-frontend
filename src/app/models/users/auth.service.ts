import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LoggedInfo} from './LoggedInfo';
import {User} from './user';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn: LoggedInfo;
  baseUrl = 'http://localhost/backend/';

  constructor(private http: HttpClient, private router: Router) { }

  getHeaders() {
    const emptyheaders = new HttpHeaders();
    const contentType = emptyheaders.append('content-Type', 'application/x-www-form-urlencoded');
    const authorization = contentType.append('Authorization', this.isLoggedIn ? this.isLoggedIn.token : '');
    return authorization;
  }

  // Makes connection to db and returns users info onsuccess or error
  public login(args: User): Observable<LoggedInfo> {
    const params = `id=${args.id}&password=${args.password}&accountType=${args.accountType}`;
    return this.http.post<LoggedInfo>(this.baseUrl + 'initials/login', params, {headers: this.getHeaders()});
  }

  public loggedIn(userInfo: LoggedInfo) {
    this.isLoggedIn = userInfo;
  }

  public logout() {
    console.log(this.isLoggedIn);
    if (this.isLoggedIn) {
      this.http.post(this.baseUrl + 'initials/logout', '', {headers: this.getHeaders()}).subscribe();
    }
    this.router.navigateByUrl('../');
    this.isLoggedIn = null;
  }
}
