// src/routes/userRoutes.ts
import { Router } from "express";
import { GroceryController } from "../controllers/grocery.controller";

const router = Router();

router.get("/", GroceryController.getAllGroceries);
router.get("/:id", GroceryController.getGroceryById);
router.post("/", GroceryController.createGrocery);
router.put("/:id", GroceryController.updateGrocery);
router.delete("/:id", GroceryController.deleteGrocery);

export default router;
