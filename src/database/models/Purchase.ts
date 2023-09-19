import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/config';

import Invoice from './Invoice';

export interface PurchaseAttributes {
  id: number;
  productId: number;
  quantity: number;
  code: string;
  totalPrice: string;
  invoiceId: number;
}

class Purchase extends Model<PurchaseAttributes> implements PurchaseAttributes {
  public id!: number;
  public productId!: number;
  public quantity!: number;
  public code!: string;
  public totalPrice!: string;
  public invoiceId!: number;

  public readonly purchase?: typeof Purchase;
}

Purchase.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "product_id",
    },
    quantity: {
      type: DataTypes.FLOAT,
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: "total_price",
    },
    invoiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "invoice_id",
    },
  }, 
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: 'purchases',
  }
);

Purchase.belongsTo(Invoice, { foreignKey: 'invoiceId' });

export default Purchase;
