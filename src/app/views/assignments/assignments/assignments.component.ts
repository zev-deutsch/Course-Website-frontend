import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../models/data.service';
import {ViewAssignments} from '../../../models/assignments/View-Assignments';
import {AuthService} from '../../../models/users/auth.service';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Assignment} from '../../../models/assignments/Assignment';
import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import * as _moment from 'moment';
// import {default as _rollupMoment} from 'moment';

// const moment = _rollupMoment || _moment;
const moment =  _moment;

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  getAssignments: ViewAssignments[];
  constructor(private dataService: DataService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAssignment();
  }

  getAssignment(): void {
    this.dataService.getAssignment(this.authService.isLoggedIn).subscribe((res) => {
      this.getAssignments = [];
      res.map((item) => {
        this.getAssignments.push(new ViewAssignments(item));
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAssignmentDialogComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe(() => {
      // update page to include new assignment
      this.getAssignment();
    });
  }

  // moment function from moment.js need this for html
  moment() {
    return moment();
  }

}


/***********************************
 * Script for add assignment dialog
 **********************************/
@Component({
  selector: 'app-assignment-add',
  templateUrl: 'assignment-add-dialog.html',
  styleUrls: ['./assignment-add-dialog.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],

})
export class AddAssignmentDialogComponent implements OnInit {

  newAssignment: FormGroup;
  isSubmitted = false;
  newAssignmentObject: Assignment;
  datesConflict = false;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private dataService: DataService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<AssignmentsComponent>
  ) { }

  ngOnInit() {

    this.newAssignment = this.formBuilder.group({
      subject: ['', Validators.required],
      releaseDate: [new Date(), Validators.required],
      dueDate: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  get formControls() { return this.newAssignment.controls; }

  addAssignment() {

    // Set isSubmitted to true
    this.isSubmitted = true;

    // If there are errors don't continue to process form
    if (this.newAssignment.invalid) {
      return;
    }

    // Check if dates are valid - due date after release date
    if (moment(this.newAssignment.value.dueDate).isSameOrBefore(this.newAssignment.value.releaseDate)) {
      this.datesConflict = true;
      return;
    }

    // If valid, create object of all entries
    this.newAssignmentObject = new Assignment(
      this.authService.isLoggedIn.id,
      this.newAssignment.value.subject,
      moment(this.newAssignment.value.releaseDate).format('YYYY-MM-DD'),
      moment(this.newAssignment.value.dueDate).format('YYYY-MM-DD'),
      this.newAssignment.value.body);

    // If valid send new assignment to database
    this.dataService.addAssignment(this.newAssignmentObject).subscribe(res => console.log(res));

    // Close dialog
    this.dialogRef.close();

    // Snackbar message
    this.snackBar.open('Assignment added!', '', {
      duration: 2500,
      horizontalPosition: 'center',
    });
  }
}
