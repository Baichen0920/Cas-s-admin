const db = require('./../models/sequelize')

const Unit = db.units

module.exports = {
  create: async (req, res, next) => {
    const { unitId, name } = req.query
    const unit = {
      unit_id: unitId,
      name: name,
    }

    Unit.create(unit)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  },
  read: async (req, res, next) => {
    Unit.findAll()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  },
  update: async (req, res, next) => {
    const { unitId } = req.query
    Unit.update(req.body, {
      where: { unit_id: unitId },
    }).then((result) => {
      if (result) {
        res.send('Success')
      } else {
        res.send('Cannot update')
      }
    })
  },
  delete: async (req, res, next) => {
    const { unitId } = req.query

    Unit.destroy({ where: { unit_id: unitId } }).then((result) => {
      if (result) {
        res.send('success')
      } else {
        res.send('failed')
      }
    })
  },
}
