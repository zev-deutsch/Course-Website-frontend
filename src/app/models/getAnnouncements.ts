export class GetAnnouncements {
  teacherName: string;
  date: string;
  body: string;

  constructor(args?) {
    this.teacherName = args.name;
    this.date = args.date;
    this.body = args.body;
  }
}
