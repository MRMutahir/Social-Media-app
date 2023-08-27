import express from "express";
import { register,home ,login} from "../controller/controller.js";
// import { User } from "../model/model.js";

let router = express.Router();
// console.log(app);
// router.get("/", home);
router.get('/home',home)
router.post("/register", register);
router.post("/login",login)

export { router };
