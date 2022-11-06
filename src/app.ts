import express from "express";

import { error } from "./middlewares/Error";

import { Tasks_Router } from "./routes/tasks.routes";
import { User_Router } from "./routes/user.routes";

const cors = require("cors");
const app = express();

app.use(express.json());

app.use(require('cors')());
/* app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
    );
    app.use(cors());
    next();
}); */

app.use("/tasks", Tasks_Router);
app.use("/user", User_Router);

app.use(error);

export default app;
