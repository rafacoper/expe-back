import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Measurement extends Model {}

Measurement.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    abbreviation: DataTypes.STRING,
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "measurements",
  }
);
