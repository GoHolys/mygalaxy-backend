import express from "express";
import controller from "../controllers/Person";

const router = express.Router();

router.get("/", controller.getAllPeople);
router.get("/sorted/", controller.getSortedPeople);
router.get("/:personId", controller.getSinglePerson);

export = router;
