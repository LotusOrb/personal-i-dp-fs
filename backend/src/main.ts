import express from "express";
import _ from "lodash";

import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./service/auth.service";
import { UserRepository } from "./repository/user.reposistory";

function main() {
  const app = express();
  app.get("/", (req, res) => {
    res.json({
      routes: _.chain(app._router.stack)
        .map((v: any) => v.route?.path)
        .compact()
        .value(),
    });
  });

  // Repository
  const userRepo = new UserRepository();

  // Service
  const authSvc = new AuthService(userRepo);

  // Controller
  const authCtrl = new AuthController(app, authSvc);

  // controller init
  authCtrl.init()

  app.listen(3000);
}

main();
