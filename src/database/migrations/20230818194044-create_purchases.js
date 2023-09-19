"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("purchases", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "product_id",
        references: {
          model: {
            tableName: "products",
          },
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.FLOAT,
      },
      code: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalprice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        field: "total_price",
      },
      invoiceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "invoice_id",
        references: {
          model: {
            tableName: "invoices",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "created_at",
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "updated_at",
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        field: "deleted_at",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("standardized_products");
  },
};
