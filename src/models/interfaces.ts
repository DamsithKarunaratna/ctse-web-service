import { Document } from "mongoose";

export interface IGame extends Document {
  title: string;
  release_date: string;
  image: any;
  genre: string;
  owner_email: string;
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
