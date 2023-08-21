module.exports = (sequelize, DataTypes) => {
  const Seller = sequelize.define(
    "Seller",
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
      cnpj: {
        type: DataTypes.STRING,
      },
      stateIdentifier: {
        type: DataTypes.FLOAT,
      },
      state: DataTypes.STRING,
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "sellers",
    }
  );

  Seller.associate = (models) => {
    Seller.hasMany(models.Product, { foreignKey: 'id', as: 'products' });
    Seller.hasMany(models.Grocery, { foreignKey: 'id', as: 'grocery' });
  }
  return Seller;
};
