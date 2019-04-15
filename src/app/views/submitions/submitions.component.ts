import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../models/data.service';
import {ViewSubmissions} from '../../models/assignments/View-Submissions';

@Component({
  selector: 'app-submitions',
  templateUrl: './submitions.component.html',
  styleUrls: ['./submitions.component.scss']
})
export class SubmitionsComponent implements OnInit {
  constructor(private dataService: DataService) { }
  @Input() assignementId: number;
  submissions: ViewSubmissions[];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  ngOnInit() {
    this.getSubmitions(this.assignementId);
  }

  getSubmitions(id) {
    this.dataService.getSubmitions(id).subscribe(res => {
      this.submissions = [];
      res.map((item) => {
      this.submissions.push(new ViewSubmissions(item));
      console.log(this.submissions);
    });
  });
  }
}
