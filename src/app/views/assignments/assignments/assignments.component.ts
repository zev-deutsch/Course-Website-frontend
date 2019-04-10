import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../models/data.service';
import {ViewAssignments} from '../../../models/assignments/View-Assignments';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {
  getAssignments: ViewAssignments[];
  id = 1;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getAssignment(this.id);
  }

  getAssignment(id): void {
    this.dataService.getAssignment(id).subscribe((res) => {
      this.getAssignments = [];
      res.map((item) => {
        this.getAssignments.push(new ViewAssignments(item));
      });
    });
  }
}
