const { Grocery } = require("../models")

module.exports = {
  async up (_queryInterface, _Sequelize) {
    const groceriesData= [
      {
        userId: 1,
        sellerId: 1,
        totalValue: 100.00,
        icmsPaid: 10.00,
        icmsBasis: 8.00,
        productList: 'Something A',
        createdAt: new Date(),
      },
      {
        userId: 1,
        sellerId: 1,
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
    ];

    await Grocery.bulkCreate(groceriesData)
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('groceries', null, {});
  },
};
