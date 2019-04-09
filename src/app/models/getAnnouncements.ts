export class getAnnouncements {
  teacherName: string;
  date: string;
  body: string;

  constructor(teacherName: string, date: string, body: string) {
    this.teacherName = teacherName;
    this.date = date;
    this.body = body;
  }
}
