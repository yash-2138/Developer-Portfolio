'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.createTable('articles',{
    id:{
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER(11)
    },
    title:{
        allowNull: false,
        type: Sequelize.STRING(50),
    },
    description:{
        type: Sequelize.STRING(500)
    },
    body:{
        type: Sequelize.STRING(5000)
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
