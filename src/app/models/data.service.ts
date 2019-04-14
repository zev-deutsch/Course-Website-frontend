import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Announcement } from './announcements/Announcement';
import { Observable } from 'rxjs';
import { GetAnnouncements } from './announcements/getAnnouncements';
import {ViewAssignments} from './assignments/View-Assignments';
import {Submissions} from './assignments/Submissions';
import {LoggedInfo} from './users/LoggedInfo';
import {AuthService} from './users/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = 'http://localhost/backend/';
  announcements: GetAnnouncements[];
  submit: any;

  constructor(private http: HttpClient, private authService: AuthService) { }

  getHeaders() {
    const emptyheaders = new HttpHeaders();
    const contentType = emptyheaders.append('content-Type', 'application/x-www-form-urlencoded');
    const authorization = contentType.append('Authorization', this.authService.isLoggedIn ? this.authService.isLoggedIn.token : '');
    return authorization;
  }

  addAnnouncement(announcement: Announcement): Observable<Announcement[]> {
    const params = `teacherid=${announcement.teacherId}&body=${announcement.body}`;
    return this.http.post<Announcement[]>(this.baseUrl + 'teachers/addAnnouncement', params, {headers: this.getHeaders()});
  }

  getAnnouncements(): Observable<GetAnnouncements[]> {
    return this.http.get<GetAnnouncements[]>(this.baseUrl + 'initials/getAnnouncements');
  }

  getAssignment(data: LoggedInfo): Observable<ViewAssignments[]> {
    const params = `${data.accountType}_id=${data.id}`;
    return this.http.post<ViewAssignments[]>(this.baseUrl + `${data.accountType}s/listAssignments/`, params, {headers: this.getHeaders()});
  }

  submitAssignment(data: Submissions): Observable<Submissions[]> {
    const params = `studentid=${data.studentId}&assignmentid=${data.assignmentId}&text=${data.text}`;
    return this.http.post<Submissions[]>(this.baseUrl + 'Students/addSubmission', params, {headers: this.getHeaders()});
  }

  announcementRead(studentId: number, announcementId: number) {
    const params = `studentid=${studentId}&announcementid=${announcementId}`;
    return this.http.post<any>(this.baseUrl + 'Students/addAnnouncementRead', params, {headers: this.getHeaders()});
  }
}
