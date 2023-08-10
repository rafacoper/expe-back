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
    const result = await User.findAll()
    return result
  },

  // async createUser(userData: Omit<UserData, "id">): Promise<UserData> {
  //   const values = [
  //     userData.email,
  //     userData.areacode,
  //     userData.phone,
  //     userData.name,
  //     userData.lastName,
  //     userData.password,
  //     userData.birth,
  //   ];
  //   const result = await client.query(query, values);
  //   client.release();
  //   return result.rows[0];
  // },
};
