export  class Assignments {
  subject: string;
  dueDate: string;
  releaseDate: string;
  body: string;
  teacherId: number;

  constructor(subject: string,
              dueDate: string,
              releaseDate: string,
              body: string,
              teacherId: number,){

    this.subject = subject;
    this.dueDate = dueDate;
    this.releaseDate = releaseDate;
    this.body = body;
    this.teacherId = teacherId;
  }
}
