export  class LoggedInfo {
  token: string;
  accountType: string;
  id: number;
  name: string;
  error: string;

  constructor(args?) {
    this.token = args.token;
    this.accountType = args.accountType;
    this.id = args.stID;
    this.name = args.name;
    this.error = args.error;
  }
}
