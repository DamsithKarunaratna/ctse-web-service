import { Request, Response, Router } from "express";
import * as gameController from "../controllers/gameController";

const router: Router = Router();

router.get("/", gameController.allGames);
router.get("/{id}", gameController.getGame);
router.post("/", gameController.addgame);
router.put("/{id}", gameController.updateGame);
router.delete("/{id}", gameController.deleteGame);
