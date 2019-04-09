import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Announcement } from './Announcement';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetAnnouncements } from './getAnnouncements';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcement: Announcement[];
  announcements: GetAnnouncements[];
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
    return this.http.get<GetAnnouncements[]>(this.baseUrl + 'initials/GetAnnouncements');
  }
}
