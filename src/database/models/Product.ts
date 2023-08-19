import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Product extends Model {
  static associate(models: any) {
    models.Product.hasMany(models.Seller, {
      foreignKey: "id",
      as: "seller",
    });
    models.Product.hasMany(models.StandardizedProduct, {
      foreignKey: "id",
      as: "standardizedProduct",
    });
  }
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    value: DataTypes.FLOAT,
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    standardizedProductId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    paranoid: true,
    underscored: true,
    tableName: "products",
  }
);
