import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Announcement } from './announcements/Announcement';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { GetAnnouncements } from './announcements/getAnnouncements';
import {ViewAssignments} from './assignments/View-Assignments';
import {Submissions} from './assignments/Submissions';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcement: Announcement[];
  announcements: GetAnnouncements[];
  submit: any;
  headers = new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded'
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

  submitAssignment(data: Submissions): Observable<Submissions[]> {
    const text = data.text;
    const assignmentId = data.assignmentId;
    const studentId = data.studentId;
    return this.http.post<Submissions[]>(this.baseUrl + 'Students/addSubmission', {text, assignmentId, studentId}, {headers: this.headers});
  }
}
