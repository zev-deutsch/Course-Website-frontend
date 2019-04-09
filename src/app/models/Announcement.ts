export class Announcement {
  teacherId: number;
  body: string;

  constructor(teacherId: number, body: string) {
    this.teacherId = teacherId;
    this.body = body;
  }
}
