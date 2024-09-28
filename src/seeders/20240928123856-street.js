'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('street', [{
      id: 1,
      city_id: 1,
      name: 'Rua A',
      number: 200,
      complement: '',
      neigborhood: 'Aquarius',
      postal_code: '12246021'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('street', null, {});
  }
};
