import { Document } from "mongoose";

export interface IGame extends Document {
  title: string;
  release_date: Date;
  image: any;
  genre: string;
  reviews: IReview[];
}

interface IReview {
  body: string;
  date: Date;
  rating: number;
  title: string;
  gameId: string;
  userEmail: string;
}
