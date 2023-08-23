"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.renameTable("groceries", "purchases");
  },
  async down(queryInterface) {
    await queryInterface.renameTable("purchases", "groceries");
  },
};
