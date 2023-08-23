const { User } = require("../models")

module.exports = {
  async up(_queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        firstName: "User",
        lastName: "One",
        email: "userone@example.com",
        phone: "1234567890",
        areaCode: "+1",
        birth: "1990-11-01",
        password: "password1",
        createdAt: new Date(),
      },
      {
        id: 2,
        firstName: "User",
        lastName: "Two",
        email: "usertwo@example.com",
        phone: "9876543210",
        areaCode: "+1",
        birth: "1995-05-10",
        password: "password2",
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};