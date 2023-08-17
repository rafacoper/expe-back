// src/controllers/userController.ts
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await UserService.getUser(Number(id));
      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An internal error occurred" });
    }
  },

  async createUser(req: Request, res: Response): Promise<Response> {
    const userData = req.body;
    try {
      const newUser = await UserService.createUser(userData);
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = req.body;
      const updatedUser = await UserService.updateUser(Number(id), user);
      return res.status(200).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await UserService.deleteUser(Number(id));
      return res.status(204).end();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "An error occurred" });
    }
  },
};
