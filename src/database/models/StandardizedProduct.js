module.exports = (sequelize, DataTypes) => {
  const StandardizedProduct = sequelize.define(
    "StandardizedProduct",
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
      quantity: {
        type: DataTypes.FLOAT,
      },
      value: DataTypes.FLOAT,
      measurementId: {
        type: DataTypes.INTEGER,
        references: {
          model: "measurements",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      brandId: {
        type: DataTypes.INTEGER,
        references: {
          model: "brands",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      sellerList: DataTypes.STRING,
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "standardized_products",
    }
  );

  StandardizedProduct.associate = (models) => {
    StandardizedProduct.hasOne(models.Measurement, {
      foreignKey: "measurementId",
      as: "measurement",
    });
    StandardizedProduct.hasMany(models.Brand, {
      foreignKey: "brandId",
      as: "brand",
    });
  };

  return StandardizedProduct;
};
