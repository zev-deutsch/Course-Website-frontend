export class User {
  // accountType: string;
  id: number;
  password: string;
  accountType: string;

  constructor(args?){
    // this.accountType = args.accountType;
    this.id = args.stID;
    this.password = args.password;
    this.accountType = args.accountType;
  }
}
