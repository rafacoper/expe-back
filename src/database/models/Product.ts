import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Product extends Model {
  static associate(models: any) {
    models.Product.belongsTo(models.Brand, { foreignKey: 'brandId', as: 'brand' });
    models.Product.belongsToMany(models.Purchase, { through: 'PurchaseProduct', foreignKey: 'productId', as: 'purchases' });
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
    name: {
      type: DataTypes.STRING,
    },
    brandId: {
      type: DataTypes.STRING,
    },
    measurement: {
      type: DataTypes.ENUM('UN', 'KG'),
    },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "products",
  }
);
