import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllToDos,
  updateTodo,
} from "../controllers/todo.js";
import { validateTodo } from "../middlewares/validateTodo.js";

const router = express.Router();
router.get("/", getAllToDos);
router.post("/add", validateTodo, addTodo);
router.put("/update/:id", updateTodo);
router.delete("/delete/:id", deleteTodo);
export default router;
