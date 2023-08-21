require('dotenv').config();

import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: "localhost",
  dialect: 'postgres',
});
