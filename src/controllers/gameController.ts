// tslint:disable:no-console
import { Request, Response } from "express";
import Game from "../models/game";

export const allGames = (req: Request, res: Response) => {
  Game.find((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      res.send(result);
    }
  });
};

export const getGame = (req: Request, res: Response) => {
  Game.findById(req.params.id, (err: any, game: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(game);
    }
  });
};

export const deleteGame = (req: Request, res: Response) => {
  Game.deleteOne({ _id: req.params.id }, (err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send("Succesfully Deleted Game");
    }
  });
};

export const updateGame = (req: Request, res: Response) => {
  console.log(req.body);
  Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, book: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully updated Game entry!");
      }
    }
  );
};

export const addgame = (req: Request, res: Response) => {
  const game = new Game(req.body);
  game.save((err: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(game);
    }
  });
};

export const addAllgames = (req: Request, res: Response) => {

  console.log("addAllGames called");

  // for (const item of req.body) {
  //   console.log(item);
  // }

<<<<<<< HEAD
<<<<<<< HEAD
  Game.insertMany(req.body, {ordered: false}, (err: any, game: any) => {
=======
  Game.insertMany(req.body, (err: any, game: any) => {
>>>>>>> Add iterator to request body3
=======
  Game.insertMany(req.body, {ordered: false}, (err: any, game: any) => {
>>>>>>> insertMany() set oredered option to false
    if (err) {
      res.send(err);
    } else {
      res.send(game);
    }
  });
};
