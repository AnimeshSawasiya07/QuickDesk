import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routers/User.routes.js"

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.use("/", (req, res) => {
    res.send("QuickDesk API running");
});

export default app;