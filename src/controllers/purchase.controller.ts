// src/controllers/GroceryController.ts
import { Request, Response } from "express";
import { PurchaseService } from "../services/purchase.service";

export const PurchaseController = {
  async getAllpurchases(req: Request, res: Response): Promise<Response> {
    try {
      const purchases = await PurchaseService.getAllPurchases();
      return res.json(purchases);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async getPurchaseById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const purchase = await PurchaseService.getPurchase(Number(id));
      return res.json(purchase);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async createPurchase(req: Request, res: Response): Promise<Response> {
    const purchaseData = req.body;
    try {
      const newPurchase = await PurchaseService.createPurchase(purchaseData);
      return res.status(201).json(newPurchase);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
  async updatePurchase(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const purchaseData = req.body;
      const purchase = await PurchaseService.updatePurchase(Number(id), purchaseData);
      return res.status(200).json(purchase);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },

  async deletePurchase(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await PurchaseService.deletePurchase(Number(id));
      return res.status(204).end();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
};
