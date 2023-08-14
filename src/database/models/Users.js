// models/User.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      lastName: {
        type: DataTypes.STRING,
        field: 'last_name'
      },
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      birth: DataTypes.DATEONLY,
      areacode: DataTypes.STRING,
      password: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at'
      },
    },
    {
      paranoid: true,
      underscored: true,
      tableName: 'Users',
    }
  );

  return User;
};
