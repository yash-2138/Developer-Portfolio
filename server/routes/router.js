const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')

route.post("/api/sendDetails", controller.saveDetails)
route.get("/api/getArticles", controller.getArticles)

module.exports = route;