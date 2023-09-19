import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: "localhost",
  dialect: 'postgres',
});

const databaseConfig = {
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: "localhost",
  dialect: 'postgres',
};

export const development = databaseConfig;
export const test = databaseConfig;
export const production = databaseConfig;
