"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        name: "Batata Doce",
        code: "123456789",
        quantity: 5,
        value: 12,
        sellerId: 2,
        standardizedProductId: 1,
      },
      {
        name: "Queijo Suíço",
        code: "123456789",
        quantity: 5,
        value: 12,
        sellerId: 3,
        standardizedProductId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};
