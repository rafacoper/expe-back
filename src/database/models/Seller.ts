import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Seller extends Model {}

Seller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    stateIdentifier: DataTypes.STRING,
    state: DataTypes.STRING,
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "sellers",
  }
);
