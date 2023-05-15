'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('visitors_infos',{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      name:{
          allowNull: false,
          type: Sequelize.STRING(20),
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
      },
      createdAt:{
          type:Sequelize.DATE,
          default: Date.now
      },
      updatedAt:{
          type:Sequelize.DATE,
          default: Date.now
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
