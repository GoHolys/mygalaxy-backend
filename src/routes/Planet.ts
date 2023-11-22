import express from "express";
import controller from "../controllers/Planet";

const router = express.Router();

router.get("/", controller.getAllPlanets);
router.get("/sorted/:orderId", controller.getSortedPlanets);
router.get("/:planetId", controller.getSinglePlanet);

export = router;
