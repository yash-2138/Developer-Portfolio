const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

module.exports = sequelize.define("articles",{
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
},{
    timestamps: false
})