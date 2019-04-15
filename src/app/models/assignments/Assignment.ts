export  class Assignment {
  teacherId: number;
  subject: string;
  releaseDate: number; // Date = current unix timestamp
  dueDate: number;
  body: string;

  constructor(teacherId: number,
              subject: string,
              releaseDate: number,
              dueDate: number,
              body: string){
    this.teacherId = teacherId;
    this.subject = subject;
    this.releaseDate = releaseDate;
    this.dueDate = dueDate;
    this.body = body;
  }
}
