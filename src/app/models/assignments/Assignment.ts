export  class Assignment {
  teacherId: number;
  subject: string;
  releaseDate: string; // Date = current unix timestamp in string format
  dueDate: string;
  body: string;

  constructor(teacherId: number,
              subject: string,
              releaseDate: string,
              dueDate: string,
              body: string){
    this.teacherId = teacherId;
    this.subject = subject;
    this.releaseDate = releaseDate;
    this.dueDate = dueDate;
    this.body = body;
    console.log(this.releaseDate);
  }
}
