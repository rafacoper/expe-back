import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../config/config';

export default class Purchase extends Model {
  static associate(models: any) {
    models.Purchase.belongsTo(models.Invoice, { foreignKey: 'invoiceId', as: 'invoice' });
  }
}

Purchase.init({
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
}, {
  sequelize,
  paranoid: true,
  underscored: true,
  tableName: 'purchases',
});
