import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../Controllers/todoControllers.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createTodo);
router.get("/", getAllTodos);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

export default router;
