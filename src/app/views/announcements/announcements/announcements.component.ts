import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../../models/Announcement';
import {DataService} from '../../../data.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  announcements: Announcement[];
  announcement = new Announcement(0, '');

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addAnnouncement() {
    this.dataService.addAnnouncement(this.announcement).subscribe((res: Announcement[]) => {
      this.announcements = res;
    });
  }
}
