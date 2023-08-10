// src/services/userService.ts
import { pool } from "../config/database"; // Assuming you have a database.ts file
import { User } from "../models/User";

export const UserService = {
  async getAllUsers(): Promise<User[]> {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM users");
    client.release();
    return result.rows;
  },

  async createUser(userData: Omit<User, "id">): Promise<User> {
    const client = await pool.connect();
    const query =
      'INSERT INTO users(email, areacode, phone, name, "lastName", password, birth) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *';
    const values = [
      userData.email,
      userData.areacode,
      userData.phone,
      userData.name,
      userData.lastName,
      userData.password,
      userData.birth,
    ];
    const result = await client.query(query, values);
    client.release();
    return result.rows[0];
  },
};
