export class User {
  constructor(arg: Omit<User, "id" | "craeted_at" | "updated_at">) {
    this.username = arg.username;
    this.password = arg.password;
  }

  id!: number;
  username: string;
  password: string;
  created_at!: Date;
  updated_at!: Date;
}
