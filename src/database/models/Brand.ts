import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

import Product from "./Product.js";

interface BrandAttributes {
  id: number;
  name: string;
}

class Brand extends Model<BrandAttributes> implements BrandAttributes {
  public id!: number;
  public name!: string;

  public readonly product?: typeof Product;
}

Brand.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "brands",
  }
);

Brand.hasMany(Product, { foreignKey: 'brandId' });

export default Brand;
