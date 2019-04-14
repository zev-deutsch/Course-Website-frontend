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
    this.loggedIn = this.authService.loggedInOld();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AssignmentSubmissionDialogComponent, {data: this.assignment});
    Width:'200';
  }
}

@Component({
  selector: 'app-assignment-submission-dialog',
  templateUrl: 'assignment-submission-dialog.html',
})
export class AssignmentSubmissionDialogComponent implements OnInit {
  githubRepo: string;

  constructor(
    private submitted: MatSnackBar,
    private dataService: DataService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public assignment: ViewAssignments) {

  }

  ngOnInit() {

  }


  submitAssignment() {
    const submit = new Submissions(this.authService.isLoggedIn.id, this.assignment.id, this.githubRepo);
    console.log(submit);
    this.dataService.submitAssignment(submit).subscribe(res => console.log(res));
    const submitDate = new Date();
    this.submitted.open('Assignment submitted!', submitDate.toDateString(), {
      duration: 2500,
    });
  }
}
