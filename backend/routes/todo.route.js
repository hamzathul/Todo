import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  TodoStatus,
  UpdateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", getAllTodos);
router.post("/", addTodo);
router.put("/:id", UpdateTodo);
router.put("/:id/toggle", TodoStatus);
router.delete("/:id", deleteTodo);

export default router;
