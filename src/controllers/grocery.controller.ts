// src/controllers/GroceryController.ts
import { Request, Response } from "express";
import { GroceryService } from "../services/grocery.service";

export const GroceryController = {
  async getAllGroceries(req: Request, res: Response): Promise<Response> {
    try {
      const groceries = await GroceryService.getAllGroceries();
      return res.json(groceries);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async getGroceryById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const grocery = await GroceryService.getGrocery(Number(id));
      return res.json(grocery);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async createGrocery(req: Request, res: Response): Promise<Response> {
    const GroceryData = req.body;
    try {
      const newGrocery = await GroceryService.createGrocery(GroceryData);
      return res.status(201).json(newGrocery);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
  async updateGrocery(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const grocery = req.body;
      const updatedGrocery = await GroceryService.updateGrocery(Number(id), grocery);
      return res.status(200).json(updatedGrocery);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },

  async deleteGrocery(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await GroceryService.deleteGrocery(Number(id));
      return res.status(204).end();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
};
