import express from "express";
import {
  logoutUser,
  signInUser,
  signUpUser,
  updateUser,
} from "../Controllers/userControllers.js";

const router = express.Router();
router.post("/", signUpUser);
router.post("/auth", signInUser);
router.post("/logout", logoutUser);
router.put("/", updateUser);

export default router;
