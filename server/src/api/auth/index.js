import Router from "koa-router";
import * as authCtrl from "./auth.ctrl";

const auth = new Router();

auth.post("/register", authCtrl.register);
auth.post("/login", authCtrl.login);
auth.post("/findpw", authCtrl.findpw);
auth.patch("/:id", authCtrl.changePw);
auth.patch("/:id", authCtrl.profileUpdate);
auth.get("/check", authCtrl.check);
auth.post("/logout", authCtrl.logout);

export default auth;
