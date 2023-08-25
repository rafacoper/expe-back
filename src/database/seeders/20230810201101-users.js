const { User } = require("../models")

module.exports = {
  async up(_queryInterface, _Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        firstName: "Rafael",
        lastName: "Barbosa",
        email: "rafael@example.com",
        phone: "31993320990",
        areaCode: "+55",
        birth: "1986-02-27",
        password: "rockrock",
        createdAt: new Date(),
      },
      {
        id: 2,
        firstName: "Henrique",
        lastName: "Baeta",
        email: "henrique@example.com",
        phone: "31995039353",
        areaCode: "+55",
        birth: "1987-05-10",
        password: "hemphemp",
        createdAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};