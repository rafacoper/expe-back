import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class StandardizedProduct extends Model {
  static associate(models: any) {
    models.StandardizedProduct.hasOne(models.Measurement, {
      foreignKey: "id",
      as: "measurement",
    });
    models.StandardizedProduct.hasMany(models.Brand, {
      foreignKey: "id",
      as: "brand",
    });
  }
}

StandardizedProduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
    quantity: DataTypes.FLOAT,
    value: DataTypes.FLOAT,
    measurementId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sellerList: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
    },
  },
  {
    sequelize: sequelize,
    paranoid: true,
    underscored: true,
    tableName: "products",
  }
);
