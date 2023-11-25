import express from "express";
import controller from "../controllers/Starship";

const router = express.Router();

router.get("/starship/:starshipId", controller.getSingleStarship);
router.get("/:pageId", controller.getStarshipsByPage);

export = router;
