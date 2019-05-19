import { model, Schema } from "mongoose";
import * as interfaces from "./interfaces";

const Review = new Schema({
  body: String,
  date: String,
  gameId: String,
  rating: { type: Number, min: 0, max: 5 },
  title: String,
  userEmail: String
});

const GameSchema = new Schema({
  genre: String,
  image: String,
  owner_email: String,
  release_date: { type: String, required: false },
  reviews: [Review],
  title: { type: String, required: true, unique: true },
});

const Game = model<interfaces.IGame>("Game", GameSchema);
export default Game;
