import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../config/config';

export default class GroceryModel extends Model {
  static associate(models: any) {
    models.Grocery.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    models.Grocery.belongsTo(models.Seller, { foreignKey: 'id', as: 'seller' });
  }
}

GroceryModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  icmsPaid: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  icmsBasis: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  productList: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize: sequelize,
  paranoid: true,
  underscored: true,
  tableName: "groceries",
});
