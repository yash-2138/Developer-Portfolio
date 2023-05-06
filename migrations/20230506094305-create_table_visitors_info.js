'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('visitors_info',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      first_name:{
          allowNull: false,
          type: Sequelize.STRING(20),
      },
      last_name:{
          allowNull: false,
          type: Sequelize.STRING(20)
      },
      email:{
          allowNull: false,
          type: Sequelize.STRING(50)
      },
      mobile:{
          type: Sequelize.INTEGER(10)
      },
      subject:{
          type: Sequelize.STRING(50)
      },
      details:{
          type: Sequelize.STRING(500)
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
