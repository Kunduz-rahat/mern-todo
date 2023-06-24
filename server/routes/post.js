import { Router } from "express";
import { createTodo,  getTodos, updateTodo, deleteTodo } from "../controllers/todo.js";

const router = new Router()

router.post('/', createTodo)
router.get('/', getTodos)
router.delete('/:id', deleteTodo)
router.put('/:id', updateTodo)

export default router