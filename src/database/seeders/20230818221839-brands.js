"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("brands", [
      {
        id: "1",
        name: "Arisco",
      },
      {
        id: "2",
        name: "Bauducco",
      },
      {
        id: "3",
        name: "Colgate",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
