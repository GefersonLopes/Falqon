import { Router } from "express";

import { createTask } from "../controllers/tasks/createTask";
import { deleteTask } from "../controllers/tasks/deleteTask";
import { listTaksOfUser } from "../controllers/tasks/listTaksOfUser";
import { listTask } from "../controllers/tasks/listTask";
import { updateTask } from "../controllers/tasks/updateTask";
import { verifyToken } from "../middlewares/verifyToken";

export const Tasks_Router = Router();

Tasks_Router.post("/", verifyToken ,createTask);
Tasks_Router.get("/", verifyToken ,listTask);
Tasks_Router.get("/:id", verifyToken ,listTaksOfUser);
Tasks_Router.patch("/:id", verifyToken ,updateTask);
Tasks_Router.delete("/:id", verifyToken ,deleteTask);