'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('user', [{
      id: "2448e23d-f8dd-47d7-b583-18ace2167d42",
      name: "Teste wefit",
      email: "testeWefit@gmail.com",
      password: "$2a$08$KDUN.hbhp364XT8F0wWg2.1Nffa8ctq06Cil4/unsO.T0KBmmXw46",
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('user', null, {});
  }
};
