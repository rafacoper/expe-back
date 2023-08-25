"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("measurements", [
      {
        abbreviation: "Kg",
      },
      {
        abbreviation: "Un",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("measurements", null, {});
  },
};
