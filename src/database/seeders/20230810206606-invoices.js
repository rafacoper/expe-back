'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("invoices", [
      {
        id: 1,
        userId: 1,
        sellerId: 2,
        date: Date.now(),
        totalValue: 234,
        createdAt: new Date(),
      },
      {
        id: 2,
        userId: 1,
        sellerId: 1,
        date: Date.now(),
        totalValue: 94,
        createdAt: new Date(),
      },
      {
        id: 3,
        userId: 2,
        sellerId: 2,
        date: Date.now(),
        totalValue: 45,
        createdAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('invoices', null, {});
  }
};