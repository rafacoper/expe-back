// src/routes/userRoutes.ts
import express from "express";
import { UserController } from "../controllers/user.controler";

const router = express.Router();

router.get("/", UserController.getAllUsers);
// router.post("/", UserController.createUser);

export default router;
