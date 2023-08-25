import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Brand extends Model {}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "brands",
  }
);
