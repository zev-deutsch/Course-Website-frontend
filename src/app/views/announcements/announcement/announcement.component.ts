import {Component, Input, OnInit} from '@angular/core';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: GetAnnouncements;
  constructor() {
  }

  ngOnInit() {
  }
// TODO bounes mark as read function
  markRead() {

  }
}

