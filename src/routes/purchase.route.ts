// src/routes/userRoutes.ts
import { Router } from "express";
import { PurchaseController } from "../controllers/purchase.controller";

const router = Router();

router.get("/", PurchaseController.getAllpurchases);
router.get("/:id", PurchaseController.getPurchaseById);
router.post("/", PurchaseController.createPurchase);
router.put("/:id", PurchaseController.updatePurchase);
router.delete("/:id", PurchaseController.deletePurchase);

export default router;
