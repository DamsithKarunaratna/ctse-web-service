import { model, Schema } from "mongoose";
import * as interfaces from "./interfaces";

const Review = new Schema({
  body: String,
  date: { type: Date, default: Date.now },
  rating: { type: Number, min: 0, max: 5 },
  title: String,
});

const GameSchema = new Schema({
  genre: String,
  image: String,
  release_date: { type: Date, required: false },
  reviews: [Review],
  title: { type: String, required: true },
});

const Game = model<interfaces.IGame>("Game", GameSchema);
export default Game;
