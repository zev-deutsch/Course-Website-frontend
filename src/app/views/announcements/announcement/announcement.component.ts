import {Component, Input, OnInit} from '@angular/core';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';
import {DataService} from '../../../models/data.service';
import {AuthService} from '../../../models/users/auth.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: GetAnnouncements;

  constructor(private authService: AuthService, private dataService: DataService) {
  }

  ngOnInit() {
    this.checkIfRead();
  }

  markRead() {
    this.dataService.announcementRead(this.authService.isLoggedIn.id, this.announcement.announcementId).subscribe();

  }

  private checkIfRead() {
    // TODO make a call to check if announcement was read by current student
    // TODO make a call to list all students who have read this announcement
  }
}

