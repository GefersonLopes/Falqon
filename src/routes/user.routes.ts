import { Router } from "express";

import { createUser } from "../controllers/user/createUser";
import { loginUser } from "../controllers/user/loginUser";

export const User_Router = Router();

User_Router.post("/register", createUser);
User_Router.post("/login", loginUser);