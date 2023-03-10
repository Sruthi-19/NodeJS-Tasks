import { Router } from "express";
import { getUsers, createUser } from "./user.controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);

export default userRouter;
