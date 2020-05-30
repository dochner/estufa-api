const { Router } = require('express')
const estufaController = require('./controller/estufaController')

const routes = Router()

routes.get('/test', estufaController.index)

module.exports = routes;