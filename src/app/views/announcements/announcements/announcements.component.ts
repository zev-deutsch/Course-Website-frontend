import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../../models/Announcement';
import {DataService} from '../../../models/data.service';
import {getAnnouncements} from '../../../models/getAnnouncements';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  addannouncement: Announcement[];
  getannouncements: getAnnouncements[];
  announcement = new Announcement(0, '');

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAnnouncements();
  }

  addAnnouncement() {
    this.dataService.addAnnouncement(this.announcement).subscribe((res: Announcement[]) => {
      this.addannouncement = res;
    });
  }

  getAnnouncements(): void {
    this.dataService.getAnnouncements().subscribe((res: getAnnouncements[]) => {
      this.getannouncements = res;
    });
  }
}
