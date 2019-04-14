import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../models/data.service';
import {ViewAssignments} from '../../../models/assignments/View-Assignments';
import {AuthService} from '../../../models/users/auth.service';
import {MatDialog, MatSnackBar} from '@angular/material';

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
export class AddAssignmentDialogComponent {

  constructor(private submitted: MatSnackBar) {

  }

  addAssignment() {
    const submitDate = new Date();
    this.submitted.open('Assignment added!', submitDate.toDateString(), {
      duration: 2500,
    });
  }


}
