module.exports = (sequelize, DataTypes) => {
  const Purchase = sequelize.define(
    "Purchase",
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
      totalprice: {
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
    paranoid: true,
    underscored: true,
    tableName: 'purchases',
  });

  Purchase.associate = (models) => {
    Purchase.belongsTo(models.Invoice, { foreignKey: 'invoiceId', as: 'invoice' });
    // Purchase.belongsToMany(models.Product, { through: 'PurchaseProduct', foreignKey: 'purchaseId', as: 'products' });
  };

  return Purchase;
};