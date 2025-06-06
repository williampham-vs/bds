"use strict";
const { Model } = require("sequelize");
const { enumData } = require("../ultils/contant");
module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pricing.init(
    {
      name: {
        type: DataTypes.ENUM,
        values: enumData.pricings,
      },
      isDisplayImmedialy: DataTypes.BOOLEAN,
      isShowDescription: DataTypes.BOOLEAN,
      priority: DataTypes.INTEGER,
      requiredScore: DataTypes.INTEGER,
      requiredScoreNextLevel: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      expiredDay: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pricing",
    }
  );
  return Pricing;
};
