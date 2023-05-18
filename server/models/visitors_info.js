const Sequelize = require('sequelize')
const sequelize = require('../database/connection')

module.exports  = sequelize.define("visitors_infos",{
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
        type: Sequelize.INTEGER(50)
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