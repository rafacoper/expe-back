module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      birth: DataTypes.DATEONLY,
      areaCode: {
        type: DataTypes.STRING,
      },
      password: DataTypes.STRING,
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Purchase, { foreignKey: "userId", as: 'purchase' });
  };

  return User;
};
