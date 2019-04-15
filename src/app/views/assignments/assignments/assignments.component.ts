import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../models/data.service';
import {ViewAssignments} from '../../../models/assignments/View-Assignments';
import {AuthService} from '../../../models/users/auth.service';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Assignment} from '../../../models/assignments/Assignment';
import {User} from "../../../models/users/user";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  getAssignments: ViewAssignments[];
  constructor(private dataService: DataService, private authService: AuthService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAssignment(this.authService.isLoggedIn);
  }

  getAssignment(data): void {
    this.dataService.getAssignment(data).subscribe((res) => {
      this.getAssignments = [];
      res.map((item) => {
        this.getAssignments.push(new ViewAssignments(item));
      });
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAssignmentDialogComponent,{
      width: '500px'
    });
  }
}

@Component({
  selector: 'app-assignment-add',
  templateUrl: 'assignment-add-dialog.html',
  styleUrls: ['./assignment-add-dialog.scss']

})
export class AddAssignmentDialogComponent implements OnInit {

  newAssignment: FormGroup;
  isSubmitted = false;
  newAssignmentObject: Assignment;
  datesConflict: boolean = false;

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

    // Check if dates are valid
    if (Number(this.newAssignment.value.releaseDate) >= Number(this.newAssignment.value.dueDate)) {
      this.datesConflict = true;
      return;
    }

    // If there are errors don't continue to process form
    if (this.newAssignment.invalid) {
      return;
    }

    // If valid, create object of all entries
    this.newAssignmentObject = new Assignment(
      this.authService.isLoggedIn.id,
      this.newAssignment.value.subject,
      Number(this.newAssignment.value.releaseDate), // Date = current unix timestamp
      Number(this.newAssignment.value.dueDate),
      this.newAssignment.value.body)

    // If valid send new assignment to database
    this.dataService.addAssignment(this.newAssignmentObject).subscribe(res => console.log(res));

    // Close dialog
    this.dialogRef.close();

    // Snackbar message
    this.snackBar.open('Assignment added!', '', {
      duration: 2500,
    });
  }
}
