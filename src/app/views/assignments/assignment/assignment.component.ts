import {Component, Inject, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {ViewAssignments} from '../../../models/assignments/View-Assignments';
import {AuthService} from '../../../models/users/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../models/data.service';
import {Submissions} from '../../../models/assignments/Submissions';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  @Input() assignment: ViewAssignments;
  private loggedIn: string;
  constructor(public dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {
    this.loggedIn = this.authService.loggedIn();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AssignmentSubmissionDialogComponent);
    console.log('The dialog was opened');

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // submit form and do all necessary actions
    // });
  }
}

@Component({
  selector: 'app-assignment-submission-dialog',
  templateUrl: 'assignment-submission-dialog.html',
})
export class AssignmentSubmissionDialogComponent implements OnInit {
  githubRepo: string;
  id = 1;
  submit: Submissions;
  constructor(private submitted: MatSnackBar, private dataService: DataService) {

  }

  ngOnInit() {

  }

  //   public dialogRef: MatDialogRef<AssignmentSubmissionDialogComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: SubmitAssignment) {}
  //
  // cancelSubmission(): void {
  //   this.dialogRef.close();
  // }

  submitAssignment() {
    this.submit = new Submissions(this.githubRepo, this.id, this.id);
    console.log(this.submit);
    this.dataService.submitAssignment(this.submit).subscribe(res => console.log(res));
    const submitDate = new Date();
    this.submitted.open('Assignment submitted!', submitDate.toDateString(), {
      duration: 2500,
    });
  }
}
