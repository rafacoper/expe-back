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
        type: DataTypes.INTEGER,
        field: "user_id",
        allowNull: false, 
      },
      sellerId: {
        type: DataTypes.INTEGER,
        field: "seller_id",
        allowNull: false,
      },
      totalValue: {
        type: DataTypes.DECIMAL(10, 2),
        field: "total_value",
        allowNull: false,
      },
      icmsPaid: {
        type: DataTypes.DECIMAL(10, 2),
        field: "icms_paid",
        allowNull: false,
      },
      icmsBasis: {
        type: DataTypes.DECIMAL(10, 2),
        field: "icms_basis",
        allowNull: false,
      },
      productList: {
        type: DataTypes.TEXT,
        field: "product_list",
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at",
      },
  },
  {
    paranoid: true,
    underscored: true,
    tableName: 'groceries',
  });

  Grocery.associate = (models) => {
    Grocery.belongsTo(models.User, { foreignKey: 'id', as: 'user' });
    Grocery.belongsTo(models.Seller, { foreignKey: 'id', as: 'seller' });
  };

  return Grocery;
};