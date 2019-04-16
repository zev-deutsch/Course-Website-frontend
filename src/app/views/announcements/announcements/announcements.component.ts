import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../models/data.service';
import {GetAnnouncements} from '../../../models/announcements/getAnnouncements';
import {AuthService} from '../../../models/users/auth.service';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {
  getannouncements: GetAnnouncements[];

  constructor(private dataService: DataService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
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
    const dialogRef = this.dialog.open(AddAnnouncementsDialogComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(() => {
      // update page to include new announcement
      this.getAnnouncements();
    });
  }

  updatePage() {
    this.getAnnouncements();
  }
}


/************************************
 * Script for add announcement dialog
 ***********************************/
@Component({
  selector: 'app-announcement-add',
  templateUrl: 'announcement-add-dialog.html',
  styleUrls: ['./announcement-add-dialog.scss'],
})
export class AddAnnouncementsDialogComponent implements OnInit {

  newAnnouncement: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private dataService: DataService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<AnnouncementsComponent>
  ) { }

  ngOnInit() {

    this.newAnnouncement = this.formBuilder.group({
      body: ['', Validators.required]
    });
  }

  get formControls() { return this.newAnnouncement.controls; }


  addAnnouncement() {

    // Set isSubmitted to true
    this.isSubmitted = true;

    // If there are errors don't continue to process form
    if (this.newAnnouncement.invalid) {
      return;
    }

    // If valid send new announcement to database
    this.dataService.addAnnouncement(this.authService.isLoggedIn.id, this.newAnnouncement.value.body).subscribe(res => console.log(res));

    // Close dialog
    this.dialogRef.close();

    // Snackbar message
    this.snackBar.open('Announcement added!', '', {
      duration: 2500,
    });
  }

}
