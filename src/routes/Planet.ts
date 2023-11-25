import express from "express";
import controller from "../controllers/Planet";

const router = express.Router();

router.get("/:pageId", controller.getPlanetsByPage);
router.get("/planet/:planetId", controller.getSinglePlanet);

export = router;
