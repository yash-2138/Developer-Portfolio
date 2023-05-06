require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_NAME,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "mysql"
  },
  test: {
    username: process.env.USER_NAME,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "mysql"
  },
  production: {
    username: process.env.USER_NAME,
    password: process.env.PASS,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "mysql"
  }
}



