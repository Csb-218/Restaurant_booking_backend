'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Reservations',
      [
        {
          Name: 'John Doe',
          email: 'johndoe@gmail.com',
          Date: new Date(),
          guests: 5,
          phone:9861289352,
          SpecialRequest: 'No special request',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ]

    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Reservations', null, {});
  }
};
