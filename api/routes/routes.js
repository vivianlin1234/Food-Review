import express from "express";
import PageController from "../controllers/controller.js";

const router = express.Router();

router.route("/").get(PageController.getHomePage);

router.route("/food").get(PageController.getfood);

export default router;
