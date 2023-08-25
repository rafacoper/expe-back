"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("purchases", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "product_id",
        references: {
          model: "product",
          key: "id",
        },
      },
      quantity: {
        type: DataTypes.FLOAT,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalprice: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        field: "total_price",
      },
      invoiceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "invoice_id",
        references: {
          model: "invoice",
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
