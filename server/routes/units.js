const express = require('express')
const route = express.Router()
const UnitController = require('./../app/controller/units')

route.put('/create', UnitController.create)
route.get('/read', UnitController.read)
route.post('/update', UnitController.update)
route.delete('/delete', UnitController.delete)

module.exports = route