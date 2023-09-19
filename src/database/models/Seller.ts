import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/config';

import Invoice from './Invoice';

interface SellerAttributes {
  id: number;
  name: string;
  cnpj: number;
  address: string;
  stateIdentifier: string;
  state: string;
}

class Seller extends Model<SellerAttributes> implements SellerAttributes {
  public id!: number;
  public name!: string;
  public cnpj!: number;
  public address!: string;
  public stateIdentifier!: string;
  public state!: string;

  public readonly invoice?: typeof Invoice;
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

Seller.hasMany(Invoice, { foreignKey: 'seller_id' })

export default Seller;
