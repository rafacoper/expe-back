"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("standardized_products", [
      {
        name: "Batata",
        quantity: 1,
        value: 1,
        measurementId: 1,
        brandId: 1,
        sellerList: "1,2,3",
      },
      {
        name: "Queijo",
        quantity: 3,
        value: 5.2,
        measurementId: 2,
        brandId: 2,
        sellerList: "1,2,3",
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("standardized_products", null, {});
  },
};
