import { Model, DataTypes } from "sequelize";

import { sequelize } from "../config/config";

export default class Seller extends Model {
  static associate(models: any) {
    models.Seller.hasMany(models.Invoice, { foreignKey: 'seller_id', as: 'seller' });
  }
}

Seller.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cnpj: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stateIdentifier: {
      type: DataTypes.FLOAT,
      field: "state_identifier",
    },
    state: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "sellers",
  }
);
