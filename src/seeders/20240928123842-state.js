'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('state', [{
      id: 1,
      name: 'São Paulo'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('state', null, {});
  }
};
