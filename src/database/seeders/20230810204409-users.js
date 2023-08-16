const { User } = require("../models")

module.exports = {
  async up(_queryInterface, _Sequelize) {
    const usersData = [
      {
        id: 1,
        firstName: "User",
        lastName: "One",
        email: "userone@example.com",
        phone: "1234567890",
        areaCode: "+1",
        password: "password1",
        birth: "1990-11-01",
        createdAt: new Date(),
      },
      {
        id: 2,
        firstName: "User",
        lastName: "Two",
        email: "usertwo@example.com",
        phone: "9876543210",
        areaCode: "+1",
        password: "password2",
        birth: "1995-05-10",
        createdAt: new Date(),
      },
    ];

    await User.bulkCreate(usersData);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};