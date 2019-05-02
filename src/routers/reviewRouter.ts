import { Request, Response, Router } from "express";
import * as reviewController from "../controllers/reviewController";

const router: Router = Router();

router.post("/", reviewController.addReview);
router.put("/:id", reviewController.updateReview);
router.get("/", reviewController.getAllReviews);

// router.get("/", gameController.allGames);
// router.get("/:id", gameController.getGame);
// router.post("/", gameController.addgame);
// router.put("/:id", gameController.updateGame);
// router.delete("/:id", gameController.deleteGame);

export default router;
