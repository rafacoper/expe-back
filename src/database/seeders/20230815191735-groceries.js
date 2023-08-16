'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groceries', [
      {
        userId: 1,
        sellerId: 'A1',
        totalValue: 100.00,
        icmsPaid: 10.00,
        icmsBasis: 8.00,
        productList: 'Something A',
        createdAt: new Date(),
      },
      {
        userId: 1,
        sellerId: '1',
        totalValue: 120.00,
        icmsPaid: 15.00,
        icmsBasis: 4.00,
        productList: 'Something B',
        createdAt: new Date(),
      },
      {
        userId: 2,
        sellerId: 1,
        totalValue: 80.00,
        icmsPaid: 5.00,
        icmsBasis: 3.00,
        productList: 'Something C',
        createdAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('groceries', null, {});
  },
};
