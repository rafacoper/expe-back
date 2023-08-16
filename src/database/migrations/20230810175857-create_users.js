module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName:{ 
        type: Sequelize.STRING,
        field: "first_name" 
      },
      lastName: { 
        type: Sequelize.STRING,
        field: "last_name" 
      },
      email: Sequelize.STRING,
      phone: Sequelize.STRING,
      birth: Sequelize.DATEONLY,
      areacode: {
        type: Sequelize.STRING,
        field: "area_code",
      },
      password: Sequelize.STRING,
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "created_at",
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        field: "deleted_at",
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable("users");
  },
};
