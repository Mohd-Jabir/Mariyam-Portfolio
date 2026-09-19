import express from "express";

import {
  createFeedback,
  getFeedback,
} from "../controllers/feedbackController.js";

import { validateFeedback } from "../middleware/validate.js";

const router = express.Router();

router.get("/", getFeedback);

router.post("/", validateFeedback, createFeedback);

export default router;
