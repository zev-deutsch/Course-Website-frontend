import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Announcement} from './models/Announcement';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcement: Announcement[];
  constructor(private http: HttpClient) { }

  addAnnouncement(announcement: Announcement): Observable<Announcement[]> {
    return this.http.post(this.baseUrl + 'initial/addAnnouncement', {announcement}).pipe(
      map((res) => {
        this.announcement.push(res['announcement']);
        return this.announcement;
      })
    );
  }
}
