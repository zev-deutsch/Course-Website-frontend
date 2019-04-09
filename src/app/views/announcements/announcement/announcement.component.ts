import {Component, Input, OnInit} from '@angular/core';
import {getAnnouncements} from '../../../models/getAnnouncements';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @Input() announcement: getAnnouncements;
  constructor() {
  }

  ngOnInit() {
  }
}

