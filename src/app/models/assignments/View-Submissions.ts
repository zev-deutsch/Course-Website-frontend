export class ViewSubmissions {
  assignmentid: number;
  datesubmitted: string;
  grade: number;
  id: number;
  name: string;
  studentid: number;
  text: string;
  constructor(args?) {
  this.assignmentid = args.assignmentid;
  this.datesubmitted = args.datesubmitted;
  this.grade = (args.grade) ? args.grade : null;
  this.id = args.id;
  this.name = args.name;
  this.studentid = args.studentid;
  this.text = args.text;
  }
}
