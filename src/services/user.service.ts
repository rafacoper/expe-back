const { User } = require("../database/models")
import bcrypt from "bcrypt";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  areacode: string;
  birth: Date;
  password: string;
}

export const UserService = {
  async getAllUsers(): Promise<UserData[]> {
    try {
      const result = await User.findAll();
      return result;
    } catch (error) {
      throw error
    }
  },

  async createUser(userData: Omit<UserData, "id">): Promise<UserData> {
    try {
      const { password } = userData;
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(password, saltRounds);
      const userCreated = await User.create({ ...userData, password: hashedPassword });
      return userCreated;
    } catch (error) {
      throw error;
    }
  },

  async getUser(id: number): Promise<UserData> {
    try {
      const user = await User.findByPk(id, {
        attributes: { exclude: "password" },
      });
      if (!user) {
        throw new Error('User not found');
      }
      return user;
    } catch (error) {
      throw error;
    }
  },

  async updateUser(id: number, user: UserData): Promise<UserData> {
    try {
      await User.update(
        {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          areacode: user.areacode,
          birth: user.birth,
          password: user.password,
        },
        {
          where: { id } 
        },
        user);
      return user;
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(id: number): Promise<void> {
    try {
      await User.destroy({
        where: { id }
      });
    } catch (error) {
      throw error;
    }
  },
};
