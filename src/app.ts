import express from "express";

import { error } from "./middlewares/Error";

import { Tasks_Router } from "./routes/tasks.routes";
import { User_Router } from "./routes/user.routes";

const cors = require("cors");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    app.use(cors());
    next();
});

app.use("/tasks", Tasks_Router);
app.use("/user", User_Router);

app.use(error);

export default app;
