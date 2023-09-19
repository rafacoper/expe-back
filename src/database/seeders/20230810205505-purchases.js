'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("purchases", [
      {
        id: 1,
        productId: 1,
        quantity: 5,
        code: 34,
        total: 130,
        createdAt: new Date(),
      },
      {
        id: 2,
        productId: 1,
        quantity: 3,
        code: 65,
        total: 210,
        createdAt: new Date(),
      },
    ]);
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};