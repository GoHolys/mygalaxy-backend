import express from "express";
import controller from "../controllers/Person";

const router = express.Router();

router.get("/:pageId", controller.getPeopleByPage);
router.get("/sorted/", controller.getSortedPeople);
router.get("/:personId", controller.getSinglePerson);

export = router;
