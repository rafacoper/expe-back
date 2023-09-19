"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("brands", [
      {
        id: "1",
        name: "Arisco",
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "Bauducco",
        createdAt: new Date(),
      },
      {
        id: "3",
        name: "Colgate",
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("brands", null, {});
  },
};