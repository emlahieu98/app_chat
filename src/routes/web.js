import express from "express";
import { home, auth } from "./../controllers/index";
import { authValid } from "./../validation/index";

const router = express.Router();
//init all router
let initRoutes = (app) => {
  router.get("/", home.getHome);
  router.get("/login-register", auth.loginRegister);
  router.post("/register", authValid.register, auth.postRegister )
  return app.use("/" , router);
}
module.exports = initRoutes;
