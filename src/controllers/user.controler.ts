// src/controllers/userController.ts
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
  async getAllUsers(_req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      return res.json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserService.getUser(Number(id));
      return res.json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async createUser(req: Request, res: Response) {
    const userData = req.body;
    try {
      const newUser = await UserService.createUser(userData);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
  async updateUser() {
    return;
  },

  async deleteUser() {
    return;
  },
};
