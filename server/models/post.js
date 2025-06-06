"use strict";
const { Model } = require("sequelize");
const { enumData } = require("../ultils/contant");

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      // Quan hệ với bảng Users
      Post.belongsTo(models.User, { foreignKey: "idUser" });
    }
  }

  Post.init(
    {
      idPost: DataTypes.STRING, // uuid
      idUser: DataTypes.INTEGER,
      title: DataTypes.STRING,
      address: DataTypes.STRING,
      province: DataTypes.STRING,
      district: DataTypes.STRING,
      ward: DataTypes.STRING,
      avgStar: DataTypes.FLOAT,
      price: DataTypes.BIGINT,
      priceUnit: DataTypes.BIGINT,
      size: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      floor: DataTypes.INTEGER,
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
      isFurniture: DataTypes.BOOLEAN,
      listingType: {
        type: DataTypes.ENUM,
        values: enumData.listingType,
      },
      propetyType:{
        type: DataTypes.ENUM,
        values: enumData.propetyType,
      },
      directions:{
        type: DataTypes.ENUM,
        values: enumData.directions,
      },
      balonDirection:{
        type: DataTypes.ENUM,
        values: enumData.directions,
      },
      veryfied: DataTypes.BOOLEAN,
      expiredDate: DataTypes.DATE,
      exprireadBoots: DataTypes.DATE,
      status: {
        type: DataTypes.ENUM,
        values: enumData.postStatus,
      },
    },
    {
      sequelize,
      modelName: "Post",
      tableName: "Posts",
      timestamps: true,
    }
  );

  return Post;
};
