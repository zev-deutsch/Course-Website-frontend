export  class LoggedInfo {
  accountType: string;
  id: number;
  name: string;
  error: string;

  constructor(args?) {

    this.accountType = args.accountType;
    this.id = args.id;
    this.name = args.name;
    this.error = args.error;
  }
}
