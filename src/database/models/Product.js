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
      name:{
        type: DataTypes.STRING,
      },
      code: {
        type: DataTypes.STRING,
      },
      quantity: {
        type: DataTypes.FLOAT,
      },
      value: DataTypes.FLOAT,
      sellerId: DataTypes.STRING,
      standardizedProductId: DataTypes.INTEGER,
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "products",
    }
  );

  // Product.associate = (models) => {
  //   Product.hasMany(models.Grocery, { foreignKey: "user_id" });
  // };

  return Product;
};
