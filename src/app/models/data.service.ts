import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from './Announcement';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {getAnnouncements} from './getAnnouncements';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcement: Announcement[];
  announcements: getAnnouncements[];
  constructor(private http: HttpClient) { }

  addAnnouncement(announcement: Announcement): Observable<Announcement[]> {
    return this.http.post(this.baseUrl + 'initial/addAnnouncement', {announcement}).pipe(
      map((res) => {
        this.announcement.push(res['announcement']);
        return this.announcement;
      })
    );
  }

  getAnnouncements(): Observable<getAnnouncements[]> {
    return this.http.get(this.baseUrl + 'initial/getAnnouncements').pipe(map((res) => {
      this.announcements = res['data'];
      return this.announcements;
    })
    );
  }
}
