import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config";

import Brand from "./Brand";
import Purchase from "./Purchase";

interface ProductAttributes {
  id: number;
  name: string;
  brandId: number;
  measurement: string;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public name!: string;
  public brandId!: number;
  public measurement!: string;

  public readonly brand?: typeof Brand;
  public readonly purchase?: typeof Purchase;
}


Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    brandId: {
      type: DataTypes.INTEGER,
    },
    measurement: {
      type: DataTypes.ENUM('UN', 'KG'),
    },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "products",
  }
);

Product.belongsTo(Brand, { foreignKey: 'brandId' });
Product.belongsToMany(Purchase, { through: 'PurchaseProduct', foreignKey: 'productId' });

export default Product;
