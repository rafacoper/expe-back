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
      address: {
        type: DataTypes.TEXT,
      },
      stateIdentifier: {
        type: DataTypes.FLOAT,
        field: "state_identifier",
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
    Seller.hasMany(models.Invoice, { foreignKey: 'seller_id', as: 'seller' });
  }
  return Seller;
};
