// tslint:disable:no-console

// initialize dependencies
import bodyParser from "body-parser";
import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { mogoUrl, port } from "./config";
import gameRouter from "./routers/gameRouter";
import reviewRouter from "./routers/reviewRouter";

// initialize express app
const app: express.Application = express();

// initialize PORT variable for heroku and local ev
const PORT: any = process.env.PORT || port;

// request parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// initialize mongoose
mongoose.Promise = global.Promise;
mongoose.connect(mogoUrl, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch((err: any) => {
  console.log("Could not connect to the database. Exiting now...", err);
  process.exit();
});

// games route
app.use("/games", gameRouter);

// review route
app.use("/reviews", reviewRouter);

// default route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "welcome to the ctse test API" });
});

app.listen(PORT, () => {
  console.log("server lsitening on port " + PORT);
});
