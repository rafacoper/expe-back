// import { User } from "../models"
const { User } = require("../database/models")

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
    const result = await User.findAll();
    console.log('USER', result);
    
    return result;
  },

  async createUser(userData: Omit<UserData, "id">): Promise<UserData> {
    const userCreated = await User.create(userData);
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
