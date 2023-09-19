import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";
import User from "./User";
import Seller from "./Seller";

interface InvoiceAttributes {
  id: number;
  userId: number;
  sellerId: number;
  totalValue: number;
}

class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: number;
  public userId!: number;
  public sellerId!: number;
  public totalValue!: number;

  public readonly user?: typeof User;
  public readonly seller?: typeof Seller;
}

Invoice.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "seller_id",
    },
    totalValue: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      field: "total_value",
    },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "invoices",
  }
);

Invoice.belongsTo(User, { foreignKey: "userId", as: "user" });
Invoice.belongsTo(Seller, { foreignKey: "sellerId", as: "seller" });

export default Invoice;
