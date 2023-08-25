// const { Grocery } = require("../database/models")
import { Model } from "sequelize/types";

import Purchase from "../database/models/Purchase";
interface PurchaseData {
	productId: number,
	quantity: number,
	code: number,
	totalPrice: number
	invoiceId: number,
}

export const PurchaseService = {
	async getAllPurchases(): Promise<Model[]> {
		try {
			const result = await Purchase.findAll();
			return result;
		} catch (error) {
			throw error;
		}
	},

	async createGrocery(PurchaseData: Omit<PurchaseData, "id">): Promise<Model> {
		try {
			const purchaseCreated = await Purchase.create(PurchaseData);
			return purchaseCreated;
		} catch (error) {
			throw error;
		}
	},

	async getPurchase(id: number): Promise<Model> {
		try {
			const purchase = await Purchase.findByPk(id)
			if (!purchase) {
				throw new Error('purchase not found');
			}
			return purchase;
		} catch (error) {
			throw error;
		}

	},

	async updatePurchase(id: number, purchase: PurchaseData): Promise<PurchaseData> {
		try {
			await Purchase.update(
				{
					productId: Purchase.productId,
					quantity: Purchase.quantity,
					code: Purchase.code,
					totalPrice: Purchase.totalPrice,
					invoiceId: Purchase.invoiceId,
				},
				{ where: { id } }
			);
			return purchase;
		} catch (error) {
			throw error
		}
	},

	async deleteGrocery(id: number): Promise<void> {
		try {
			await Purchase.destroy({
				where: { id }
			});
		} catch (error) {
			throw error;
		}
	},
};

