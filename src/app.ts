import express from "express";

import { error } from "./middlewares/Error";

import { Tasks_Router } from "./routes/tasks.routes";
import { User_Router } from "./routes/user.routes";

const app = express();
const cors = require("cors");

app.use(
    cors({
        origin: "*",
    })
);

app.use(express.json());

app.use("/tasks", Tasks_Router);
app.use("/user", User_Router);

app.use(error);

export default app;
