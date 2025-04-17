import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../Controllers/todoControllers.js";

const router = express.Router();

router.post("/", createTodo);
router.get("/", getAllTodos);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

export default router;
