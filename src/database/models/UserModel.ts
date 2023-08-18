import { Model, DataTypes } from 'sequelize';

import { sequelize } from '../config/config';

export default class UserModel extends Model {

}

UserModel.init({
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
  phone: DataTypes.STRING,
  birth: DataTypes.DATEONLY,
  areaCode: {
    type: DataTypes.STRING,
  },
  password: DataTypes.STRING,
}, {
  sequelize: sequelize,
  paranoid: true,
  underscored: true,
  tableName: "users",
});