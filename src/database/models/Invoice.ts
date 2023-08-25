import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Product extends Model {
  static associate(models: any) {
    models.Invoice.hasOne(models.User, { foreignKey: "id", as: "user" })
    models.Invoice.hasOne(models.Seller, { foreignKey: "id", as: "seller" })
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id",
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "seller_id",
      },
      totalValue: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "total_value",
      },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "products",
  }
);
