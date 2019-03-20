// tslint:disable:no-console

// initialize dependencies
import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { mogoUrl, port } from "./config";

// initialize express app
const app = express();

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

// default route
app.get("/", (req: any, res: any) => {
  res.json({ message: "welcome to the ctse test API" });
});

app.listen(port, () => {
  console.log("server lsitening on port " + port);
});
