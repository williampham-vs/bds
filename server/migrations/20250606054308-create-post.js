"use strict";

const { enumData } = require("../ultils/contant");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Posts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idPost: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      province: {
        type: Sequelize.STRING,
      },
      district: {
        type: Sequelize.STRING,
      },
      ward: {
        type: Sequelize.STRING,
      },
      avgStar: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      price: {
        type: Sequelize.BIGINT,
        defaultValue: 0,
        allowNull: false,
      },
      priceUnit: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        allowNull: false,
      },
      size: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      floor: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      bedroom: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      bathroom: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      isFurniture: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      listingType: {
        type: Sequelize.ENUM,
        values: enumData.listingType,
      },
      propetyType: {
        type: Sequelize.ENUM,
        values: enumData.propetyType,
      },
      directions: {
        type: Sequelize.ENUM,
        values: enumData.directions,
      },
      balonDirection: {
        type: Sequelize.ENUM,
        values: enumData.directions,
      },
      veryfied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      expiredDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      exprireadBoots: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: enumData.postStatus,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Posts");
  },
};
