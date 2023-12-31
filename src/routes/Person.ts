import express from "express";
import controller from "../controllers/Person";

const router = express.Router();

router.get("/:pageId", controller.getPeopleByPage);
router.get("/person/:personId", controller.getSinglePerson);

export = router;
