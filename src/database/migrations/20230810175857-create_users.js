module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: Sequelize.STRING,
      lastName: { type: Sequelize.STRING, field: "last_name" },
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      birth: Sequelize.DATEONLY,
      areacode: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "update_at",
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "deleted_at",
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("Users");
  },
};
