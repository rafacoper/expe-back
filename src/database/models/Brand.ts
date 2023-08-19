import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Brand extends Model {}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "brands",
  }
);
