'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('profile', [{
          name: "Teste 1",
          phone: "22222222",
          cell_phone: '2222222',
          email: "teste@gmail.com",
          cpf: "11111111",
          cnpj: "11111111"
     }], {});

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('profile', null, {});
  }
};
