import {Component, Input, OnInit} from '@angular/core';
import {Announcement} from '../../../models/announcements/Announcement';
import {DataService} from '../../../models/data.service';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';
import {AuthService} from '../../../models/users/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  addannouncement: Announcement[];
  getannouncements: GetAnnouncements[];

  private loggedIn: string;

  constructor(private dataService: DataService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
    this.getAnnouncements();
  }

  getAnnouncements(): void {
    this.dataService.getAnnouncements().subscribe((res) => {
      this.getannouncements = [];
      res.map((item) => {
        this.getannouncements.push(new GetAnnouncements(item));
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAnnouncementsDialogComponent,{
      width: '500px'
    });
  }

}

@Component({
  selector: 'app-announcement-add',
  templateUrl: 'announcement-add-dialog.html',
  styleUrls: ['./announcement-add-dialog.scss']
})
export class AddAnnouncementsDialogComponent {
  announcement = new Announcement(1, '');
  constructor(private submitted: MatSnackBar, private dataService: DataService) {

  }

  addAnnouncement() {
    this.dataService.addAnnouncement(this.announcement).subscribe(res => console.log(res));
    this.submitted.open('Announcement added!', '', {
      duration: 2500,
    });
  }
}
