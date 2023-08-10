// src/routes/userRoutes.ts
import { Router } from "express";
import { UserController } from "../controllers/user.controler";

const router = Router();

router.get("/", UserController.getAllUsers);
// router.post("/", UserController.createUser);
router.get("/:id", UserController.getUserById);

export default router;
