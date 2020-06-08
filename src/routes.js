const { Router } = require('express')
const estufaController = require('./controller/estufaController')

const routes = Router()

routes.get('/info', estufaController.index)

module.exports = routes;