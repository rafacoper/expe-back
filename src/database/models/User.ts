import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/config.js';
import Purchase from './Purchase.js';

export interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  areaCode: string;
  phone: number;
  birth: string;
  password: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
  public areaCode!: string;
  public phone!: number;
  public birth!: string;
  public password!: string;

  public readonly purchase?: typeof Purchase;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: DataTypes.STRING,
    areaCode: {
      type: DataTypes.STRING,
    },
    phone: DataTypes.NUMBER,
    birth: DataTypes.DATEONLY,
    password: DataTypes.STRING,
  }, 
  {
    sequelize,
    paranoid: true,
    underscored: true,
    tableName: "users",
  }
);

User.hasMany(Purchase, { foreignKey: "userId" });

export default User;
