import { Router } from "express"
import { getData, updateUser, deleteUser } from "./controllers/users"

const router = Router()

// router.post("/", createTodo)

router.get("/", getData)

router.post("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
