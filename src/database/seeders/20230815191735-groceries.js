'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Groceries', [
      {
        userId: 1,
        sellerId: 'A1',
        totalValue: 100.00,
        icmsPaid: 10.00,
        icmsBasis: 8.00,
        productList: 'Something A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        sellerId: 'A1',
        totalValue: 150.00,
        icmsPaid: 7.00,
        icmsBasis: 4.00,
        productList: 'Something BBBB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        sellerId: 'A1',
        totalValue: 70.00,
        icmsPaid: 7.00,
        icmsBasis: 4.00,
        productList: 'Something CCCC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Groceries', null, {});
  },
};
