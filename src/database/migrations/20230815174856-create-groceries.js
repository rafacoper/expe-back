module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable("groceries", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          field: "user_id",
          references: {
            model: {
              tableName: 'users',
            },
            key: "id",
          },
          onDelete: "CASCADE",
          onUpdate: "CASCADE",
        },
        sellerId: {
          field: "seller_id",
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        totalValue: {
          field: "total_value",
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        icmsPaid: {
          field: "icms_paid",
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        icmsBasis: {
          field: "icms_basis",
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        productList: {
          field: "product_list",
          type: Sequelize.TEXT,
          allowNull: false,
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE,
          field: "created_at",
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE,
          field: "updated_at",
          defaultValue: Sequelize.NOW,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
          field: "deleted_at",
          defaultValue: Sequelize.NOW,
        },
      });
    },
    async down(queryInterface, Sequelize) {
      await queryInterface.dropTable("groceries");
    },
  };