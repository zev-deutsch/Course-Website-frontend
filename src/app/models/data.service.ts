import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Announcement } from './announcements/Announcement';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetAnnouncements } from './announcements/getAnnouncements';
import {ViewAssignments} from './assignments/View-Assignments';
import {LoggedInfo} from './users/LoggedInfo';
import {User} from './users/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcement: Announcement[];
  announcements: GetAnnouncements[];
  loggedInUser: LoggedInfo;
  headers = new HttpHeaders({
    'content-Type': 'application/x-www-form-urlencoded'
  });
  
  constructor(private http: HttpClient) { }

  addAnnouncement(announcement: Announcement): Observable<Announcement[]> {
    return this.http.post(this.baseUrl + 'teachers/addAnnouncement', {announcement}).pipe(
      map((res) => {
        this.announcement.push(res['announcement']);
        return this.announcement;
      })
    );
  }

  getAnnouncements(): Observable<GetAnnouncements[]> {
    return this.http.get<GetAnnouncements[]>(this.baseUrl + 'initials/getAnnouncements');
  }

  getAssignment(id: number): Observable<ViewAssignments[]> {
    return this.http.get<ViewAssignments[]>(this.baseUrl + 'Students/listAssignments/' + id);
  }

  login(args: User): Observable<LoggedInfo> {
    const params = `id=${args.id}&password=${args.password}`;
    return this.http.post<LoggedInfo>(this.baseUrl + 'students/login', params, {headers: this.headers});
  }

  logout(accountType) {
    return this.http.get<ViewAssignments[]>(this.baseUrl + accountType + 's/logout');
  }
}
