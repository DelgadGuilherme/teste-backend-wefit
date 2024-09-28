'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('city', [{
      id: 1,
      state_id: 1,
      name: 'São José dos Campos'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('city', null, {});
  }
};
