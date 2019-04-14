export class Submissions {
  text: string;
  studentId: number;
  assignmentId: number;

  constructor(studentId: number, assignmentId: number, text: string) {
    this.text = text;
    this.studentId = studentId;
    this.assignmentId = assignmentId;
  }
}
