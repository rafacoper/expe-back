// import { User } from "../models"
const { User } = require("../database/models")
import bcrypt from "bcrypt";

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
    const result = await User.findAll({ attributes: { exclude: "password" } }
    );
    return result;
  },

  async createUser(userData: Omit<UserData, "id">): Promise<UserData> {
    const { password } = userData;
    const saltRounds = 10;
    const hashedPassword = bcrypt.hashSync(password, saltRounds);
    const userCreated = await User.create({ ...userData, password: hashedPassword });
    return userCreated;
  },

  async getUser(id: number): Promise<UserData> {
    const user = await User.findByPk(id, {
      attributes: { exclude: "password" },
    });
    return user;
  },

  async updateUser(id: number, user: UserData): Promise<UserData> {
    const userUpdated = await User.update({ where: { id } }, user);
    return userUpdated;
  },

  async deleteUser(id: number): Promise<void> {
    await User.destroy({
      where: { id }
    });
  },
};
