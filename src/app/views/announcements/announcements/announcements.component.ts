import {Component, Input, OnInit} from '@angular/core';
import {Announcement} from '../../../models/announcements/Announcement';
import {DataService} from '../../../models/data.service';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';
import {AuthService} from "../../../models/users/auth.service";
import {AssignmentSubmissionDialogComponent} from "../../assignments/assignment/assignment.component";
import {MatDialog, MatSnackBar} from "@angular/material";

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

  constructor(private dataService: DataService, private authService: AuthService,public dialog: MatDialog) { }

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

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAnnouncementsDialogComponent);
  }

}

@Component({
  selector: 'app-addAnnouncements',
  templateUrl: 'addAnnouncements.html',
})
export class AddAnnouncementsDialogComponent {

  constructor(private submitted: MatSnackBar) {

  }
  //   public dialogRef: MatDialogRef<AssignmentSubmissionDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: SubmitAssignment) {}
  //
  // cancelSubmission(): void {
  //   this.dialogRef.close();
  // }
  submitAnnouncement() {
    const submitDate = new Date();
    this.submitted.open('Announcement submitted!', submitDate.toDateString(), {
      duration: 2500,
    });
  }


}
