// import { User } from "../models"
const { User } = require("../models")

interface UserData {
  id: number;
  email: string;
  areacode: string;
  phone: string;
  name: string;
  lastName: string;
  password: string;
  birth: Date;
}

export const UserService = {
  async getAllUsers(): Promise<UserData[]> {
    const result = await User.findAll({
      attributes: { exclude: "password" },
    });
    return result;
  },

  async createUser(userData: Omit<UserData, "id">): Promise<UserData> {
    const userCreated = await User.create(userData);
    return userCreated;
  },

  async getUser(id: number) {
    const user = await User.findByPk(id, {
      attributes: { exclude: "password" },
    });
    return user;
  }
};
