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
  private loggedIn: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

// TODO bounes mark as read function
  markRead() {

  }
}

