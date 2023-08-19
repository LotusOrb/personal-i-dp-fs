import { User } from "../entity/user";
import { UserRepository } from "../repository/user.reposistory";

export class AuthService {
  constructor(private uRepo: UserRepository) {}

  public doLogin(arg: Partial<User>) {
    this.uRepo.findOne(arg);

    return {
      data: { token: "jwt_token_impl" },
      message: "Succesfulllly login",
    };
  }

  public doLogout(arg?: string) {
    return { data: {}, message: "Succesfully logout" };
  }

  public doGetProfile(arg?: string) {
    return {
      data: {
        username: "username",
        last_login: "01/01/2020",
      },
      message: "Succesfully logout",
    };
  }
}
