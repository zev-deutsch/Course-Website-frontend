export class ViewAssignments {
  teacherName: string;
  dueDate: string;
  releaseDate: string;
  body: string;
  subject: string;

  constructor(teacherName: string,
  dueDate: string,
  releaseDate: string,
  body: string,
  subject: string,){
    this.teacherName = teacherName;
    this.dueDate = dueDate;
    this.releaseDate =releaseDate;
    this.body = body;
    this.subject = subject;
  }
}
