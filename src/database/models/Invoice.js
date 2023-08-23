module.exports = (sequelize, DataTypes) => {
  const Invoice = sequelize.define(
    "Invoice",
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
      paranoid: true,
      underscored: true,
      tableName: "Invoices",
    }
    );
  
  Invoice.hasOne(models.User, { foreignKey: "id", as: "user" })
  Invoice.hasOne(models.Seller, { foreignKey: "id", as: "seller" })

  return Invoice;
};
