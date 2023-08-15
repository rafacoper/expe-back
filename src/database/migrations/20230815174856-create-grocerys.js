module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('groceries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      totalValue: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      icmsPaid: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      icmsBasis: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      productList: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },  
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('groceries');
  }
};