'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('profile', [{
          name: "João",
          street_id: 1,
          phone: "1299864434",
          cell_phone: '1299864434',
          email: "joao@gmail.com",
          cpf: "538.046.430-00",
     },
      {
          name: "Empresa melhores compras",
          street_id: 1,
          phone: "1299324544",
          cell_phone: '12994356',
          email: "melhoresCompras@gmail.com",
          cnpj: "64.572.893/0001-22",
      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('profile', null, {});
  }
};
