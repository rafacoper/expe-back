"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sellers", [
      {
        name: "John Doe",
        cnpj: "123456789",
        stateIdentifier: "123456789",
        state: "MG",
      },
      {
        name: "Richard Roe",
        cnpj: "123456789",
        stateIdentifier: "123456789",
        state: "SP",
      },
      {
        name: "Jane Doe",
        cnpj: "123456789",
        stateIdentifier: "123456789",
        state: "RJ",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
  },
};
