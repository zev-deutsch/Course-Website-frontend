import {Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import {ViewAssignments} from '../../../models/assignments/View-Assignments';
import {AuthService} from '../../../models/users/auth.service';
import {DataService} from '../../../models/data.service';
import {Submissions} from '../../../models/assignments/Submissions';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  @Input() assignment: ViewAssignments;
  @Input() submittable;
  @Input() isOverdue = false;
  @Output() updateChanges: EventEmitter<any> = new EventEmitter();

  constructor(public dialog: MatDialog, private authService: AuthService) {}

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AssignmentSubmissionDialogComponent, {data: this.assignment});
    dialogRef.afterClosed().subscribe(() => {
      // update page to include new submission
      this.updateChanges.emit();
    });
  }
}

@Component({
  selector: 'app-assignment-submission-dialog',
  templateUrl: 'assignment-submission-dialog.html',
})
export class AssignmentSubmissionDialogComponent implements OnInit {
  submissionBody: string;

  constructor(
    private submitted: MatSnackBar,
    private dataService: DataService,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public assignment: ViewAssignments) {

  }

  ngOnInit() {

  }


  submitAssignment() {
    if (!this.submissionBody){
      return;
    }
    const submit = new Submissions(this.authService.isLoggedIn.id, this.assignment.id, this.submissionBody);
    this.dataService.submitAssignment(submit).subscribe();
    const submitDate = new Date();
    this.submitted.open('Assignment submitted!', submitDate.toDateString(), {
      duration: 2500,
    });
  }
}
