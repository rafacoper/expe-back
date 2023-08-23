"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("sellers", [
      {
        id: 1,
        name: "Verde Agua",
        cnpj: "165326000145",
        stateIdentifier: "123456789",
        state: "MG",
        address: "Rua dos Golfes, 232"
      },
      {
        id: 2,
        name: "Sacolao RST",
        cnpj: "785478000144",
        stateIdentifier: "123456789",
        state: "SP",
        address: "Avenida dos Malabras, 67"
      },
      {
        id: 3,
        name: "Super Caro",
        cnpj: "122382600013",
        stateIdentifier: "123456789",
        state: "RJ",
        address: "Rua do Assalto, 98"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("sellers", null, {});
  },
};
