const { Grocery } = require("../database/models")

interface GroceryData {
	userId: number,
	sellerId: number,
	totalValue: number,
	icmsPaid: number
	icmsBasis: number
	productList: string
}

export const GroceryService = {
  async getAllGroceries(): Promise<GroceryData[]> {
		try {
			const result = await Grocery.findAll();
			return result;
		} catch (error) {
			throw error;	
		}
  },

  async createGrocery(groceryData: Omit<GroceryData, "id">): Promise<GroceryData> {
		try {
			const groceryCreated = await Grocery.create(groceryData);
			return groceryCreated;
		} catch (error) {
			throw error;	
		}
  },

  async getGrocery(id: number): Promise<GroceryData> {
		try {
			const grocery = await Grocery.findByPk(id)
			if (!grocery) {
				throw new Error('Grocery not found');
			}
			return grocery;
		} catch (error) {
			throw error;
		}
		
  },

  async updateGrocery(id: number, grocery: GroceryData): Promise<GroceryData> {
    try {
			await Grocery.update(
				{
					userId: grocery.userId,
					sellerId: grocery.sellerId,
					totalValue: grocery.totalValue,
					icmsPaid: grocery.icmsPaid,
					icmsBasis: grocery.icmsBasis,
					productList: grocery.productList,
				},
				{ where: { id } },
				grocery
			);
			return grocery;
		} catch (error) {
			throw error
		}
  },

  async deleteGrocery(id: number): Promise<void> {
		try {
			await Grocery.destroy({
				where: { id }
			});
		} catch (error) {
			throw error;	
		}
  },
};

