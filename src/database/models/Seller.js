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

  return Seller;
};
