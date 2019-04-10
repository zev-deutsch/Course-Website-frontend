import {Component, Input, OnInit} from '@angular/core';
import {Announcement} from '../../../models/announcements/Announcement';
import {DataService} from '../../../models/data.service';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';
import {AuthService} from "../../../models/users/auth.service";

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  addannouncement: Announcement[];
  getannouncements: GetAnnouncements[];
  announcement = new Announcement(0, '');
  private loggedIn: string;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
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
