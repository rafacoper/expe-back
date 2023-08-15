"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          first_name: "John",
          last_name: "Doe",
          email: "user1@example.com",
          phone: "1234567890",
          areacode: "+1",
          password: "password1",
          birth: "1990-11-01",
        },
        {
          first_name: "Jane",
          last_name: "Smith",
          email: "user2@example.com",
          phone: "9876543210",
          areacode: "+1",
          password: "password2",
          birth: "1995-05-10",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
