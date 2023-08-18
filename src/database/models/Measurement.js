module.exports = (sequelize, DataTypes) => {
  const Measurement = sequelize.define(
    "Measurement",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      abbreviation: {
        type: DataTypes.STRING,
      },
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "measurements",
    }
  );

  return Measurement;
};
