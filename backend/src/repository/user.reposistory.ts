import { User } from "../entity/user";

export class UserRepository {
  public create(arg: Partial<Omit<User, "id">>) {}

  public createMany(arg: Omit<User, "id">) {}

  public updateOne(arg: Omit<User, "id">) {}

  public findOne(arg: Partial<User>) {}

  public findById(arg?: number) {}

  public deleteOne(arg: Omit<User, "id">) {}
}
