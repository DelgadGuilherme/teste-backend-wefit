'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('street', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        unique: true,
        allowNull: false
      },
      number: {
        type: Sequelize.INTEGER
      },
      complement: {
        type: Sequelize.STRING
      },
      neigborhood: {
        type: Sequelize.STRING
      },
      postal_code: {
        type: Sequelize.STRING
      },
      city_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'city', key: 'id' },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deleted_at: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('street');
  }
};