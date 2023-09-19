// const { Grocery } = require("../database/models")
import { Model } from "sequelize/types";

import Purchase, { PurchaseAttributes } from "../database/models/Purchase";

export const PurchaseService = {
	async getAllPurchases(): Promise<PurchaseAttributes[]> {
		try {
			const result = await Purchase.findAll();
			return result;
		} catch (error) {
			throw error;
		}
	},

	async createPurchase(PurchaseData: Omit<PurchaseAttributes, "id">): Promise<Model> {
		try {
			const purchaseCreated = await Purchase.create(PurchaseData);
			return purchaseCreated;
		} catch (error) {
			throw error;
		}
	},

	async getPurchase(id: number): Promise<PurchaseAttributes> {
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

	async updatePurchase(id: number, data: PurchaseAttributes): Promise<PurchaseAttributes | null> {
		try {
			const [affectedCount, updatedPurchaseArray] = await Purchase.update(
				{
					productId: data.productId,
					quantity: data.quantity,
					code: data.code,
					totalPrice: data.totalPrice,
					invoiceId: data.invoiceId,
				},
				{ where: { id }, returning: true}
			);
			if (affectedCount > 0 && updatedPurchaseArray?.length > 0) {
				const updatedPurchase = updatedPurchaseArray[0] as Purchase;
				return updatedPurchase;
			} else {
				return null;
			}
		} catch (error) {
			throw error
		}
	},

	async deletePurchase(id: number): Promise<void> {
		try {
			await Purchase.destroy({
				where: { id }
			});
		} catch (error) {
			throw error;
		}
	},
};

