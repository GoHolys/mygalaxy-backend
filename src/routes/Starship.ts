import express from "express";
import controller from "../controllers/Starship";

const router = express.Router();

router.get("/", controller.getAllStarships);
router.get("/sorted/:orderId", controller.getSortedstarships);
router.get("/:starshipId", controller.getSingleStarship);

export = router;
