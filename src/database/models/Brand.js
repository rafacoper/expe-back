module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define(
    "Brand",
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
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "brands",
    }
  );

  return Brand;
};
