export class Submissions {
  text: string;
  studentId: number;
  assignmentId: number;

  constructor( text: string,
               studentId: number,
               assignmentId: number) {
    this.text = text;
    this.studentId = studentId;
    this.assignmentId = assignmentId;
  }
}
