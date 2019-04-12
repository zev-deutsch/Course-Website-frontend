export class User {
  // accountType: string;
  id: number;
  password: string;

  constructor(args?){
    // this.accountType = args.accountType;
    this.id = args.id;
    this.password = args.password;
  }
}
