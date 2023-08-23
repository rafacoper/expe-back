"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.addColumn(
          "purchases",
          "productId",
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: "products",
              },
              key: "id",
            },
            field: "product_id",
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "quantity",
          {
            type: Sequelize.FLOAT,
            allowNull: false,
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "code",
          {
            type: Sequelize.INTEGER,
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "code",
          {
            type: Sequelize.INTEGER,
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "invoiceId",
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: {
                tableName: "invoices",
              },
              key: "id",
            },
            field: "invoice_id",
          },
          { transaction }
        ),
        queryInterface.renameColumn("purchases", "totalValue", "totalprice", {
          transaction,
        }),
        queryInterface.removeColumn("purchases", "userId", { transaction }),
        queryInterface.removeColumn("purchases", "sellerId", { transaction }),
        queryInterface.removeColumn("purchases", "icmsPaid", { transaction }),
        queryInterface.removeColumn("purchases", "icmsBasis", { transaction }),
        queryInterface.removeColumn("purchases", "productList", {
          transaction,
        }),
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.transaction((transaction) => {
      return Promise.all([
        queryInterface.removeColumn("purchases", "productId", { transaction }),
        queryInterface.removeColumn("purchases", "quantity", { transaction }),
        queryInterface.removeColumn("purchases", "code", { transaction }),
        queryInterface.renameColumn("purchases", "totalValue", "totalprice", {
          transaction,
        }),
        queryInterface.addColumn(
          "purchases",
          "userId",
          {
            type: Sequelize.INTEGER,
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "sellerId",
          {
            type: Sequelize.INTEGER,
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "icmsPaid",
          {
            type: Sequelize.DECIMAL(10, 2),
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "icmsBasis",
          {
            type: Sequelize.DECIMAL(10, 2),
          },
          { transaction }
        ),
        queryInterface.addColumn(
          "purchases",
          "productList",
          {
            type: Sequelize.TEXT,
          },
          { transaction }
        ),
      ]);
    });
  },
};
