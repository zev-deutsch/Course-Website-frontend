import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../../models/data.service';
import {ViewSubmissions} from '../../../models/assignments/View-Submissions';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
  constructor(private dataService: DataService) { }
  @Input() assignmentId: number;
  submissions: ViewSubmissions[];
  displayedColumns: string[] = ['Name', 'Submission Body', 'Date Submitted', 'Grade', 'Update Grade'];

  ngOnInit() {
    this.getSubmissions();
  }

  getSubmissions() {
    this.dataService.getSubmissions(this.assignmentId).subscribe(res => {
      this.submissions = [];
      res.map((item) => {
      this.submissions.push(new ViewSubmissions(item));
      console.log(this.submissions);
    });
  });
  }

  gradeSubmission(studentid: number, assignmentid: number, grade: any): any {
    this.dataService.updateSubmission(studentid, assignmentid, Number(grade)).subscribe( () => this.getSubmissions()
    );
  }
}
