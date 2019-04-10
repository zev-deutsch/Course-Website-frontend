import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../../models/announcements/Announcement';
import {DataService} from '../../../models/data.service';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  addannouncement: Announcement[];
  getannouncements: GetAnnouncements[];
  announcement = new Announcement(0, '');

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAnnouncements();
  }

  addAnnouncement() {
    this.dataService.addAnnouncement(this.announcement).subscribe();
  }

  getAnnouncements(): void {
    this.dataService.getAnnouncements().subscribe((res) => {
      this.getannouncements = [];
      res.map((item) => {
        this.getannouncements.push(new GetAnnouncements(item));
      });
    });
  }
}
