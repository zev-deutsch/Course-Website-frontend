export class ViewSubmissions {
  // submissionid: number;
  assignmentid: number;
  studentid: number;
  name: string;
  text: string;
  datesubmitted: string;
  grade: number;

  constructor(args?) {
  // this.submissionid = args.id;
  this.assignmentid = args.assignmentid
  this.studentid = args.studentid;
  this.name = args.name;
  this.text = args.text;
  this.datesubmitted = args.datesubmitted;
  this.grade = (args.grade) ? args.grade : null;
  }
}
