"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      // Một comment thuộc về một bài post
      Comment.belongsTo(models.Post, { foreignKey: "idPost" });

      // Một comment thuộc về một người dùng
      Comment.belongsTo(models.User, { foreignKey: "idUser" });

      // Một comment có thể là con của một comment khác
      Comment.belongsTo(models.Comment, {
        foreignKey: "idParent",
        as: "Parent",
      });

      // Một comment có thể có nhiều comment con
      Comment.hasMany(models.Comment, {
        foreignKey: "idParent",
        as: "Replies",
      });
    }
  }

  Comment.init(
    {
      idPost: DataTypes.INTEGER,
      idUser: DataTypes.INTEGER,
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      idParent: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
      tableName: "Comments",
      timestamps: true,
    }
  );

  return Comment;
};
