// const  User = require("../database/models/UserModel")
import User, { UserAttributes } from "../database/models/User";
import { Model } from "sequelize/types";
import bcrypt from "bcrypt";

export const UserService = {
  async getAllUsers(): Promise<Model[]> {
    try {
      const result = await User.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  },

  async createUser(userData: Omit<UserAttributes, "id">): Promise<Model> {
    try {
      const { password } = userData;
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      const userCreated = await User.create({
        ...userData,
        password: hashedPassword,
      });
      return userCreated;
    } catch (error) {
      throw error;
    }
  },

  async getUser(id: number): Promise<Omit<User, "password">> {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id: number, user: UserAttributes): Promise<UserAttributes | null> {
    try {
      await User.update(
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          birth: user.birth,
          password: user.password,
        },
        {
          where: { id },
        }
      );
      return user;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id: number): Promise<void> {
    try {
      await User.destroy({
        where: { id },
      });
    } catch (error) {
      throw error;
    }
  },
};
