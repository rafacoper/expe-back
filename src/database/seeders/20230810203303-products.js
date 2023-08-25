"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("products", [
      {
        id: 1,
        name: "Batata Doce",
        brandId: null
      },
      {
        id: 2,
        name: "Escova de dente",
        brandId: 3
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("products", null, {});
  },
};