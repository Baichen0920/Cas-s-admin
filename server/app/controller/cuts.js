const db = require('./../models/sequelize')

const Cut = db.cuts

module.exports = {
  create: async (req, res, next) => {
    const { cutId, name } = req.query
    const cut = {
      cut_id: cutId,
      name: name,
    }

    Cut.create(cut)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  },
  read: async (req, res, next) => {
    Cut.findAll()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  },
  update: async (req, res, next) => {
    const { cutId } = req.query
    Cut.update(req.body, {
      where: { cut_id: cutId },
    }).then((result) => {
      if (result) {
        res.send('Success')
      } else {
        res.send('Cannot update')
      }
    })
  },
  delete: async (req, res, next) => {
    const { cutId } = req.query

    Cut.destroy({ where: { cut_id: cutId } }).then((result) => {
      if (result) {
        res.send('success')
      } else {
        res.send('failed')
      }
    })
  }
}
