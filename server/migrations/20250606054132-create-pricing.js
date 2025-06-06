"use strict";

const { enumData } = require("../ultils/contant");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Pricings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.ENUM,
        values: enumData.pricings,
      },
      isDisplayImmedialy: {
        type: Sequelize.BOOLEAN,
      },
      isShowDescription: {
        type: Sequelize.BOOLEAN,
      },
      priority: {
        type: Sequelize.INTEGER,
      },
      requiredScore: {
        type: Sequelize.INTEGER,
      },
      requiredScoreNextLevel: {
        type: Sequelize.INTEGER,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      expiredDay: {
        type: Sequelize.INTEGER,
      },
      imageUrl: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("Pricings");
  },
};
