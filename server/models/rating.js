"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
      Rating.belongsTo(models.User, { foreignKey: "idUser" });
      Rating.belongsTo(models.Post, { foreignKey: "idPost" });
    }
  }

  Rating.init(
    {
      idPost: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      star: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      modelName: "Rating",
      tableName: "Ratings",
      timestamps: true,
    }
  );

  return Rating;
};
