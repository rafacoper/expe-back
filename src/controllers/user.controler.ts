// src/controllers/userController.ts
import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "An error occurred" });
    }
  },

  // async createUser(req: Request, res: Response) {
  //   const userData = req.body;
  //   try {
  //     const newUser = await UserService.createUser(userData);
  //     res.status(201).json(newUser);
  //   } catch (error) {
  //     res.status(500).json({ error: "An error occurred" });
  //   }
  // },
};
