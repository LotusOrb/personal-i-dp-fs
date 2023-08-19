import { Express, Request, Response } from "express";
import { AuthService } from "../service/auth.service";

export class AuthController {
  constructor(private ExpressIntstance: Express, private authSvc: AuthService) {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.me = this.me.bind(this);
  }

  private login(req: Request, res: Response) {
    const resp = this.authSvc.doLogin(req.body);
    res.send(resp);
  }

  private logout(req: Request, res: Response) {
    const token = req.headers["authorization"];
    const resp = this.authSvc.doLogout(token);
    res.send(resp);
  }

  private me(req: Request, res: Response) {
    const token = req.headers["authorization"];
    const resp = this.authSvc.doGetProfile(token);
    res.send(resp);
  }

  public init() {
    this.ExpressIntstance.get("/auth/login", this.login);
    this.ExpressIntstance.get("/auth/logout", this.logout);
    this.ExpressIntstance.get("/auth/me", this.me);
  }
}
