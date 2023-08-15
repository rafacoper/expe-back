const User = require('./Users');

module.exports = (sequelize, DataTypes) => {
  const Grocery = sequelize.define(
    "Grocery",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sellerId: {
        type: DataTypes.STRING,
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
  },
  {
    paranoid: true,
    underscored: true,
    tableName: 'groceries',
    modelName: 'groceries',
  });

  Grocery.belongsTo(User, { foreignKey: 'userId' });

  return Grocery;
};