module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      },
      brandId: {
        type: DataTypes.STRING,
      },
      measurement: {
        type: DataTypes.ENUM('UN', 'KG'),
      },
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "products",
    }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Brand, { foreignKey: 'brandId', as: 'brand' }); 
    Product.belongsToMany(models.Purchase, { through: 'PurchaseProduct', foreignKey: 'productId', as: 'purchases' });
};

  return Product;
};
