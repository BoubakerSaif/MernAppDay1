import express from "express";
import {
  banUser,
  logoutUser,
  signInUser,
  signUpUser,
  unBanUser,
  updateUser,
} from "../Controllers/userControllers.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", signUpUser);
router.post("/auth", signInUser);
router.post("/logout", logoutUser);
router.put("/", protect, updateUser);
router.put("/ban/:id", protect, banUser);
router.put("/unban/:id", protect, unBanUser);

export default router;
