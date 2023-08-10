'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        lastName: 'Doe',
        email: 'user1@example.com',
        areacode: '+1',
        phone: '1234567890',
        password: 'password1',
        birth: '1990-01-01',
      },
      {
        email: 'user2@example.com',
        areacode: '+1',
        phone: '9876543210',
        name: 'Jane',
        lastName: 'Smith',
        password: 'password2',
        birth: '1995-05-10',
      },
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
