export class ViewAssignments {
  teacherName: string;
  dueDate: string;
  releaseDate: string;
  body: string;
  subject: string;
  grade: number;
  submittedDate: string;

  constructor(args?) {
    this.teacherName = args.name;
    this.dueDate = args.duedate;
    this.releaseDate = args.releasedate;
    this.body = args.body;
    this.subject = args.subject;
    this.grade = args.grade;
    this.submittedDate = args.datesubmitted;
  }
}
