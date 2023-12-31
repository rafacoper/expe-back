module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName:{
        type: DataTypes.STRING,
        field: "first_name",
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      birth: DataTypes.DATEONLY,
      areacode: {
        type: DataTypes.STRING,
        field: "area_code",
      },
      password: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: "deleted_at",
      },
    },
    {
      paranoid: true,
      underscored: true,
      tableName: "users",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Grocery, { foreignKey: "user_id" });
  };

  return User;
};
